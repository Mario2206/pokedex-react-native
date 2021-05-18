import { PokemonModel } from '../models/pokemon.model'
import { Languages } from '../configuration/languages'
import axios from '../helpers/axios.helper'
import { convertToPokemonModel } from '../helpers/model-converters/pokemon.converter'
import {
    populateSpecies,
    translateTypes,
} from '../helpers/model-modifiers/pokemon.modifier'

export default class PokemonService {
    constructor(readonly language: Languages) {}

    get(url: string): Promise<PokemonModel> {
        return axios
            .get(url)
            .then((res) => res.data)
            .then(convertToPokemonModel)
            .then(populateSpecies<PokemonModel>(this.language))
            .then(translateTypes(this.language))
    }
}
