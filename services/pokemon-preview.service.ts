import { PokemonPreviewModel } from '../models/pokemon.model'
import axios from '../helpers/axios.helper'
import originalAxios from 'axios'
import { convertToPokemonPreviewModel } from '../helpers/model-converter.helper'
import { GetServiceType } from './types/get.service.type'
import { PokemonSpecies } from '../models/pokemon-species.model'
import { Languages } from '../configuration/languages'

export class PokemonPreviewService
    implements GetServiceType<PokemonPreviewModel>
{
    public language: Languages
    constructor(
        private readonly pokemonSpeciesService: GetServiceType<PokemonSpecies>
    ) {
        this.language = pokemonSpeciesService.language
    }

    get(url: string): Promise<PokemonPreviewModel> {
        return originalAxios
            .get(url)
            .then((res) => res.data)
            .then((pokemon) =>
                convertToPokemonPreviewModel({ ...pokemon, url })
            )
            .then(async (pokemon: PokemonPreviewModel) => {
                const species = await this.pokemonSpeciesService.get(
                    pokemon.species.url
                )
                pokemon.name = species.names[0].name || pokemon.name

                return pokemon
            })
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
