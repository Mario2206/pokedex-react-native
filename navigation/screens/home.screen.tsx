import React from 'react'
import { StyleSheet, View } from 'react-native'
import SearchContainer from '../../containers/search.container'
import PokemonListContainer from '../../containers/pokemon-list.container'

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <SearchContainer />
            <PokemonListContainer />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
