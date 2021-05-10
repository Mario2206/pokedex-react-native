import { createSlice } from '@reduxjs/toolkit'
import { PokemonModel } from '../../models/pokemon.model'

const initialState = {
    pokemons: [] as PokemonModel[],
    isLoading: false,
}

export const pokemonListSlice = createSlice({
    name: 'pokemons',
    initialState,
    reducers: {
        setPokemonList: (
            state,
            action: { type: string; payload: PokemonModel[] }
        ) => {
            state.isLoading = false
            state.pokemons = action.payload
        },
        pokemonListLoading: (state, action) => {
            state.isLoading = true
        },
        clearPokemonList: (state, action) => {
            state.pokemons = []
        },
    },
})

export const { setPokemonList, clearPokemonList, pokemonListLoading } =
    pokemonListSlice.actions
