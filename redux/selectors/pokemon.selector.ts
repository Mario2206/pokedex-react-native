import { useAppSelector } from '../hooks'
import {
    MoveModel,
    PokemonModel,
    PokemonMoves,
} from '../../models/pokemon.model'

export const getPokemonsFromState = (): PokemonModel[] =>
    useAppSelector((state) => state.pokemonList.pokemons)

export const getPokemonPageFromState = (): number =>
    useAppSelector((state) => state.pokemonList.page)

export const getPokemonLoadingFromState = (): boolean =>
    useAppSelector((state) => state.pokemonList.isLoading)

export const getPokemonFromState = (): PokemonModel | undefined =>
    useAppSelector((state) => state.pokemon.pokemon)

export const getPokemonMovesFromState = (): PokemonMoves[] | null =>
    useAppSelector((state) => state.pokemon.moves)
