import { GetServiceType } from './types/get.service.type'
import { PokemonSpecies } from '../models/pokemon-species.model'
import axios from '../helpers/axios.helper'
import { Languages } from '../configuration/languages'
import { filterByLang } from '../helpers/filters.helper'

export default class PokemonSpeciesService
    implements GetServiceType<PokemonSpecies>
{
    constructor(readonly language: Languages) {}

    get(url: string): Promise<PokemonSpecies> {
        return axios
            .get(url)
            .then((res) => res.data)
            .then((data: any) => ({
                names: filterByLang(this.language, data.names),
                flavor_text_entries: filterByLang(
                    this.language,
                    data.flavor_text_entries
                ),
            }))
    }

    getAll(offset?: number, limit?: number): Promise<PokemonSpecies[]> {
        return Promise.resolve([])
    }
}
