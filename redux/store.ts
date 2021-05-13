import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { pokemonListSlice } from './slices/pokemon-list.slice'
import { pokemonSlice } from './slices/pokemon.slice'

const store = configureStore({
    reducer: {
        pokemonList: pokemonListSlice.reducer,
        pokemon: pokemonSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store
