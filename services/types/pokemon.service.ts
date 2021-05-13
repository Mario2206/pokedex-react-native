import { GetServiceType } from './get.service.type'
import { PokemonModel } from '../../models/pokemon.model'

export interface PokemonServiceType extends GetServiceType<PokemonModel> {
    getWithDetails(url: string): Promise<PokemonModel>
}
