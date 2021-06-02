import {
    MoveModel,
    PokemonModel,
    PokemonMoves,
} from '../../models/pokemon.model'

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

export interface MoveListState {
    moves: MoveModel[]
    isLoading: boolean
    page: number
}
