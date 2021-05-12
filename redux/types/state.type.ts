import { PokemonModel } from '../../models/pokemon.model'

export interface PokemonState {
    pokemons: PokemonModel[]
    isLoading: boolean
    page: number
}
