import { EvolutionChain } from '../models/pokemon.model'
import axios from 'axios'
import { convertToEvolutionChainModel } from '../helpers/model-converters/pokemon.converter'
import { populateSpecies } from '../helpers/model-modifiers/evolutions.modifier'

export default class EvolutionChainService {
    static get(url: string): Promise<EvolutionChain[]> {
        return axios
            .get(url)
            .then((res) => convertToEvolutionChainModel(res.data.chain))
            .then(populateSpecies)
    }
}
