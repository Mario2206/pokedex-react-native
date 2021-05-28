import { Languages } from '../configuration/languages'
import axios from 'axios'
import { convertToMoveModel } from '../helpers/model-converters/pokemon.converter'

export default class MovesService {
    constructor(readonly language: Languages) {}

    get(url: string) {
        return axios
            .get(url)
            .then((res) => ({
                ...res.data,
                url,
            }))
            .then(convertToMoveModel(this.language))
    }
}
