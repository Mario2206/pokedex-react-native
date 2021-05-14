import { GetServiceType } from './types/get.service.type'
import { PokemonModel } from '../models/pokemon.model'
import { Languages } from '../configuration/languages'
import axios from '../helpers/axios.helper'

export default class PokemonService implements GetServiceType<PokemonModel> {
    constructor(readonly language: Languages) {}

    get(url: string): Promise<PokemonModel> {
        return axios.get(url).then((res) => res.data)
    }

    getAll(offset?: number, limit?: number): Promise<PokemonModel[]> {
        return Promise.resolve([])
    }
}
