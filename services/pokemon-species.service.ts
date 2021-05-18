import { PokemonSpecies } from '../models/pokemon.model'
import axios from '../helpers/axios.helper'
import { Languages } from '../configuration/languages'
import { convertToPokemonSpeciesModel } from '../helpers/model-converters/pokemon.converter'

export default class PokemonSpeciesService {
    constructor(public language: Languages) {}

    get(url: string): Promise<PokemonSpecies> {
        return axios
            .get(url)
            .then((res) => ({
                ...res.data,
                url,
            }))
            .then(convertToPokemonSpeciesModel(Languages.FR))
    }
}
