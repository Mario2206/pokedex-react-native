import { Languages } from '../configuration/languages'
import axios from '../helpers/axios.helper'
import { MoveModel } from '../models/move.model'
import { convertToMoveModel } from '../helpers/model-converters/move.converter'

export default class MovesService {
    static getMany(offset: number, limit: number): Promise<MoveModel[]> {
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

    static get(url: string): Promise<MoveModel> {
        return axios.get(url).then((res) =>
            convertToMoveModel({
                ...res.data,
                url,
            })
        )
    }
}
