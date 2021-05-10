import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { pokemonListSlice } from './slices/pokemon-list.slice'

const store = configureStore({
    reducer: combineReducers({
        pokemons: pokemonListSlice.reducer,
    }),
})

export default store
