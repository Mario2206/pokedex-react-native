import React from 'react'
import { StyleSheet, View } from 'react-native'
import SearchContainer from '../../../containers/search.container'
import PokemonListContainer from '../../../containers/pokemon-list.container'
import { PokemonService } from '../../../services/pokemon.service'
import { StackNavigationProp } from '@react-navigation/stack'
import { PokemonStackParamList } from '../pokemon.navigation'
import { PokemonModel } from '../../../models/pokemon.model'

interface HomeScreenProps {
    navigation: StackNavigationProp<PokemonStackParamList, 'Home'>
}

const pokemonService = new PokemonService()

export default function HomeScreen({ navigation }: HomeScreenProps) {
    const navigateToDetails = (pokemon: PokemonModel) => {
        navigation.navigate('Details', { pokemon })
    }

    return (
        <View style={styles.container}>
            <SearchContainer />
            <PokemonListContainer
                pokemonService={pokemonService}
                navigateToDetails={navigateToDetails}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
})
