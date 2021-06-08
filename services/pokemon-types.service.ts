import axios from '../helpers/axios.helper'
import { Languages } from '../configuration/languages'
import { PokemonType } from '../models/pokemon.model'
import { convertToPokemonTypeModel } from '../helpers/model-converters/pokemon.converter'

export default class PokemonTypesService {
    static get(url: string): Promise<PokemonType> {
        return axios
            .get(url)
            .then((res) => ({ ...res.data, url }))
            .then(convertToPokemonTypeModel)
    }
}
