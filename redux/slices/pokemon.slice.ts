import { PokemonState } from '../types/state.type'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PokemonModel } from '../../models/pokemon.model'

const initialState: PokemonState = { isLoading: false, pokemon: undefined }

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        set: (state, action: PayloadAction<PokemonModel>) => {
            state.isLoading = false
            state.pokemon = action.payload
        },
        loading: (state) => {
            state.isLoading = true
        },
    },
})

export const { set, loading } = pokemonSlice.actions
