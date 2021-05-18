import { PokemonPreviewModel } from '../models/pokemon.model'
import axios from '../helpers/axios.helper'
import originalAxios from 'axios'
import { convertToPokemonPreviewModel } from '../helpers/model-converters/pokemon.converter'
import { Languages } from '../configuration/languages'
import { populateSpecies } from '../helpers/model-modifiers/pokemon.modifier'

export class PokemonPreviewService {
    constructor(public language: Languages) {}

    get(url: string): Promise<PokemonPreviewModel> {
        return originalAxios
            .get(url)
            .then((res) => ({ ...res.data, url }))
            .then(convertToPokemonPreviewModel)
            .then(populateSpecies(this.language))
    }

    getAll(offset: number, limit: number): Promise<PokemonPreviewModel[]> {
        return axios
            .get('/pokemon?offset=' + offset + '&limit=' + limit)
            .then((res) => res.data)
            .then(async (res) => {
                return await Promise.all(
                    res.results.map(
                        async (pokemon: { url: string }) =>
                            await this.get(pokemon.url)
                    )
                )
            })
    }
}
