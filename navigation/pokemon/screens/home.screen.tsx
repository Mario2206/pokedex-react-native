import React from 'react'
import { StyleSheet, View } from 'react-native'
import SearchContainer from '../../../containers/search.container'
import PokemonListContainer from '../../../containers/pokemon-list.container'
import { PokemonService } from '../../../services/pokemon.service'

const pokemonService = new PokemonService()

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <SearchContainer />
            <PokemonListContainer pokemonService={pokemonService} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
})
