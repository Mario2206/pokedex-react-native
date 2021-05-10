import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PokemonModel } from '../../models/pokemon.model'
import { PokemonState } from '../types/state.type'

const initialState: PokemonState = {
    pokemons: [] as PokemonModel[],
    isLoading: false,
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
    },
})

export const { setPokemonList, clearPokemonList, pokemonListLoading } =
    pokemonListSlice.actions
