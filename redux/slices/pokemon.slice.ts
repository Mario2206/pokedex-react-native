import { PokemonState } from '../types/state.type'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PokemonModel } from '../../models/pokemon.model'

const initialState: PokemonState = { isLoading: false, pokemon: undefined }

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        setPokemonState: (state, action: PayloadAction<PokemonModel>) => {
            state.isLoading = false
            state.pokemon = action.payload
        },
        clearPokemonState: (state) => {
            state.pokemon = undefined
        },
        loading: (state) => {
            state.isLoading = true
        },
    },
})

export const { setPokemonState, loading, clearPokemonState } =
    pokemonSlice.actions
