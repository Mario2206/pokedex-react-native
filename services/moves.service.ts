import { Languages } from '../configuration/languages'
import axios from '../helpers/axios.helper'
import { convertToMoveModel } from '../helpers/model-converters/pokemon.converter'
import { MoveModel } from '../models/pokemon.model'

export default class MovesService {
    constructor(readonly language: Languages) {}

    getMany(offset: number, limit: number): Promise<MoveModel[]> {
        return axios
            .get('/move?offset=' + offset + '&limit=' + limit)
            .then((res) => res.data)
            .then(async (res) => {
                return await Promise.all(
                    res.results.map(
                        async (move: { url: string }) =>
                            await this.get(move.url)
                    )
                )
            })
    }

    get(url: string): Promise<MoveModel> {
        return axios
            .get(url)
            .then((res) => ({
                ...res.data,
                url,
            }))
            .then(convertToMoveModel(this.language))
    }
}
