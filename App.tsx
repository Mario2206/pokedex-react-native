import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import PokemonList from './containers/pokemon-list.container'
import { Provider } from 'react-redux'
import store from './redux/store'
import SearchContainer from './containers/search.container'

export default function App() {
    return (
        <Provider store={store}>
            <SearchContainer />
            <PokemonList />
        </Provider>
    )
}
