import React from 'react'
import { StyleSheet, View } from 'react-native'
import SearchContainer from '../../../containers/search.container'
import PokemonListContainer from '../../../containers/pokemon-list.container'
import { PokemonPreviewService } from '../../../services/pokemon-preview.service'
import { StackNavigationProp } from '@react-navigation/stack'
import { PokemonStackParamList } from '../pokemon.navigation'
import { PokemonModel } from '../../../models/pokemon.model'
import { Languages } from '../../../configuration/languages'
import PokemonSpeciesService from '../../../services/pokemon-species.service'

interface HomeScreenProps {
    navigation: StackNavigationProp<PokemonStackParamList, 'Home'>
}

const pokemonSpeciesService = new PokemonSpeciesService(Languages.FR)
const pokemonService = new PokemonPreviewService(pokemonSpeciesService)

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
