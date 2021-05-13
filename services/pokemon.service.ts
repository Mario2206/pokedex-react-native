import { PokemonModel, PokemonPreviewModel } from '../models/pokemon.model'
import axios from '../helpers/axios.helper'
import originalAxios from 'axios'
import { convertToPokemonModel } from '../helpers/model-converter.helper'
import { GetServiceType } from './types/get.service.type'
import { PokemonServiceType } from './types/pokemon.service'

export class PokemonService implements PokemonServiceType {
    get(url: string): Promise<PokemonPreviewModel> {
        return originalAxios
            .get(url)
            .then((res) => res.data)
            .then((pokemon) => convertToPokemonModel({ ...pokemon, url }))
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

    // async completeWithDetails(
    //     pokemon: PokemonPreviewModel
    // ): Promise<PokemonModel> {
    //     const speciesPromise = axios
    //         .get('/pokemon-species/' + pokemon.id)
    //         .then((res) => res.data)
    //         .then((res) => ({ description: res.flavor_text_entries }))
    // }
}
