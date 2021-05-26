import { EvolutionChain, PokemonSpecies } from '../models/pokemon.model'
import axios from 'axios'
import { convertToEvolutionChainModel } from '../helpers/model-converters/pokemon.converter'
import { Languages } from '../configuration/languages'

export default class EvolutionChainService {
    constructor(readonly language: Languages) {}

    get(url: string): Promise<EvolutionChain[]> {
        return axios
            .get(url)
            .then((res) => res.data)
            .then(convertToEvolutionChainModel(this.language))
    }
}
