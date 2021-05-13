import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PokemonModel } from '../../models/pokemon.model'
import { PokemonListState } from '../types/state.type'

const initialState: PokemonListState = {
    pokemons: [] as PokemonModel[],
    isLoading: false,
    page: 0,
}

export const pokemonListSlice = createSlice({
    name: 'pokemonList',
    initialState,
    reducers: {
        addToPokemonList: (state, action: PayloadAction<PokemonModel[]>) => {
            state.isLoading = false
            state.pokemons = [...state.pokemons, ...action.payload]
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
    addToPokemonList,
    clearPokemonList,
    pokemonListLoading,
    incrementPage,
    cleanPage,
} = pokemonListSlice.actions
