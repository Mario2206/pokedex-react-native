import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PokemonModel } from '../../models/pokemon.model'
import { PokemonState } from '../types/state.type'

const initialState: PokemonState = {
    pokemons: [] as PokemonModel[],
    isLoading: false,
    page: 0,
}

export const pokemonListSlice = createSlice({
    name: 'pokemonList',
    initialState,
    reducers: {
        setPokemonList: (state, action: PayloadAction<PokemonModel[]>) => {
            state.isLoading = false
            state.pokemons = action.payload
        },
        pokemonListLoading: (state) => {
            state.isLoading = true
        },
        clearPokemonList: (state, action) => {
            state.pokemons = []
        },
        incrementPage: (state) => {
            state.page++
        },
        cleanPage: (state) => {
            state.page = 0
        },
    },
})

export const {
    setPokemonList,
    clearPokemonList,
    pokemonListLoading,
    incrementPage,
    cleanPage,
} = pokemonListSlice.actions
