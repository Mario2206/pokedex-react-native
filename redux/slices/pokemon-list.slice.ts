import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PokemonListState } from '../types/state.type'
import { PokemonModel } from '../../models/pokemon.model'

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
        incrementPage: (state) => {
            state.page++
        },
    },
})

export const { addToPokemonList, pokemonListLoading, incrementPage } =
    pokemonListSlice.actions
