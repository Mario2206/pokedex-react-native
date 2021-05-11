import { PokemonModel } from '../models/pokemon.model'
import axios from '../helpers/axios.helper'
import originalAxios from 'axios'
import { convertToPokemonModel } from '../helpers/model-converter.helper'

export function getPokemons(): Promise<PokemonModel[]> {
    return axios
        .get('/pokemon')
        .then((res) => res.data)
        .then(async (res) => {
            return await Promise.all(
                res.results.map(
                    async (pokemon: { url: string }) =>
                        await getPokemonByUrl(pokemon.url)
                )
            )
        })
}

export function getPokemonByUrl(url: string): Promise<PokemonModel> {
    return originalAxios
        .get(url)
        .then((res) => res.data)
        .then((pokemon) => convertToPokemonModel(pokemon))
}

//export function getPokemonById(): PokemonModel {}
