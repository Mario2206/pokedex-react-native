import { configureStore } from '@reduxjs/toolkit'
import { pokemonListSlice } from './slices/pokemon-list.slice'

const store = configureStore({
    reducer: {
        pokemonList: pokemonListSlice.reducer,
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store
