import React from 'react'
import { StyleSheet, View } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { PokemonStackParamList } from '../pokemon.navigation'
import { PokemonModel } from '../../../models/pokemon.model'
import PokemonListView from '../../../components/pokemon/lists/pokemon-list.component'
import usePokemonList from '../../../hooks/logic/pokemon-list.hook'
import SearchHeaderComponent from '../../../components/headers/search-header.component'

interface HomeScreenProps {
    navigation: StackNavigationProp<PokemonStackParamList, 'Home'>
}

export default function HomeScreen({ navigation }: HomeScreenProps) {
    const navigateToDetails = (pokemon: PokemonModel) => {
        navigation.navigate('Details', { pokemon })
    }

    const { pokemons, populatePokemonList, onClickPokemonItem } =
        usePokemonList({ navigateToDetails })

    return (
        <View style={styles.container}>
            <SearchHeaderComponent />
            <PokemonListView
                pokemons={pokemons}
                onEndScroll={populatePokemonList}
                onClickItem={onClickPokemonItem}
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
