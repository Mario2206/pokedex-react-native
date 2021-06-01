import { PokemonState } from '../types/state.type'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PokemonModel, PokemonMoves } from '../../models/pokemon.model'

const initialState: PokemonState = {
    isLoading: false,
    pokemon: undefined,
    moves: null,
}

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        setPokemonState: (state, action: PayloadAction<PokemonModel>) => {
            state.isLoading = false
            state.pokemon = action.payload
        },
        clearPokemonState: (state) => {
            state.isLoading = initialState.isLoading
            state.pokemon = initialState.pokemon
            state.moves = initialState.moves
        },
        loading: (state) => {
            state.isLoading = true
        },
        setMovesState: (state, action: PayloadAction<PokemonMoves[]>) => {
            state.moves = [...action.payload]
        },
    },
})

export const { setPokemonState, loading, clearPokemonState, setMovesState } =
    pokemonSlice.actions
