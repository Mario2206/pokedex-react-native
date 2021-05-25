import { PokemonModel, PokemonPreviewModel } from '../../models/pokemon.model'

export interface PokemonListState {
    pokemons: PokemonPreviewModel[]
    isLoading: boolean
    page: number
}

export interface PokemonState {
    pokemon?: PokemonModel
    isLoading: boolean
}
