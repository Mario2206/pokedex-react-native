import { PokemonModel, PokemonMoves } from '../../models/pokemon.model'

export interface PokemonListState {
    pokemons: PokemonModel[]
    isLoading: boolean
    page: number
}

export interface PokemonState {
    pokemon?: PokemonModel
    isLoading: boolean
    moves: PokemonMoves[] | null
}
