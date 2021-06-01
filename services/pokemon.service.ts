import { PokemonModel } from '../models/pokemon.model'
import { Languages } from '../configuration/languages'
import axios from '../helpers/axios.helper'
import {
    convertToPokemonModel,
    convertToPokemonPreviewModel,
} from '../helpers/model-converters/pokemon.converter'
import {
    addMoves,
    populateSpecies,
    translateTypes,
} from '../helpers/model-modifiers/pokemon.modifier'
import { addEvolutionChain } from '../helpers/model-modifiers/pokemon.modifier'
import originalAxios from 'axios'

export default class PokemonService {
    constructor(readonly language: Languages) {}

    /**
     * Get with all details
     * @param url
     */
    get(url: string): Promise<PokemonModel> {
        return axios
            .get(url)
            .then((res) => res.data)
            .then(convertToPokemonModel)
            .then(populateSpecies<PokemonModel>(this.language))
            .then(translateTypes(this.language))
            .then(addEvolutionChain(this.language))
    }

    /**
     * Get only data for preview
     * @param url
     */
    getPreview(url: string): Promise<PokemonModel> {
        return originalAxios
            .get(url)
            .then((res) => ({ ...res.data, url }))
            .then(convertToPokemonPreviewModel)
            .then(populateSpecies(this.language))
    }

    /**
     * Get a list of previews
     * @param offset
     * @param limit
     */
    getAllPreviews(offset: number, limit: number): Promise<PokemonModel[]> {
        return axios
            .get('/pokemon?offset=' + offset + '&limit=' + limit)
            .then((res) => res.data)
            .then(async (res) => {
                return await Promise.all(
                    res.results.map(
                        async (pokemon: { url: string }) =>
                            await this.getPreview(pokemon.url)
                    )
                )
            })
    }
}
