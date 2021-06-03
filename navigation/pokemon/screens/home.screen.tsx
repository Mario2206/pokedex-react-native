import React from 'react'
import { StyleSheet, View } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { PokemonStackParamList } from '../pokemon.navigation'
import { PokemonModel } from '../../../models/pokemon.model'
import usePokemonList from '../../../hooks/logic/pokemon-list.hook'
import SearchHeaderComponent from '../../../components/global/headers/search-header.component'
import MainList from '../../../components/global/list/main-list.component'
import PokemonItem from '../../../components/pokemon/lists/pokemon-item.component'

interface HomeScreenProps {
    navigation: StackNavigationProp<PokemonStackParamList, 'Home'>
}

export default function HomeScreen({ navigation }: HomeScreenProps) {
    const navigateToDetails = (pokemon: PokemonModel) => {
        navigation.navigate('Details', { pokemon })
    }

    const { pokemons, populatePokemonList, onClickPokemonItem, loading } =
        usePokemonList({ navigateToDetails })

    return (
        <View style={styles.container}>
            <SearchHeaderComponent />
            <MainList
                isLoading={loading}
                items={pokemons}
                onEndScroll={populatePokemonList}
                renderItem={({ item }) => (
                    <PokemonItem
                        pokemon={item}
                        onPress={() => onClickPokemonItem(item)}
                    />
                )}
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
