import { PokemonModel } from '../models/pokemon.model'
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
    /**
     * Get with all details
     * @param url
     */
    static async get(url: string): Promise<PokemonModel> {
        return originalAxios
            .get(url)
            .then((res) => convertToPokemonModel(res.data))
            .then(populateSpecies)
            .then(translateTypes)
            .then(addEvolutionChain)
    }

    /**
     * Get only data for preview
     * @param url
     */
    static getPreview(url: string): Promise<PokemonModel> {
        return originalAxios
            .get(url)
            .then((res) => convertToPokemonModel({ ...res.data, url }))
            .then(populateSpecies)
    }

    /**
     * Get a list of previews
     * @param offset
     * @param limit
     */
    static getAllPreviews(
        offset: number,
        limit: number
    ): Promise<PokemonModel[]> {
        return axios
            .get('/pokemon?offset=' + offset + '&limit=' + limit)
            .then(async (res) => {
                return await Promise.all(
                    res.data.results.map(
                        async (pokemon: { url: string }) =>
                            await this.getPreview(pokemon.url)
                    )
                )
            })
    }
}
