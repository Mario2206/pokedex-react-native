import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import PokemonItem from './pokemon-item.component'
import { PokemonModel } from '../models/pokemon.model'

interface PokemonListProps {
    pokemons: PokemonModel[]
}

export default function PokemonListView({ pokemons }: PokemonListProps) {
    const RenderItem = ({ item }: { item: PokemonModel }) => (
        <PokemonItem pokemon={item} />
    )

    return (
        <View style={styles.container}>
            <FlatList
                data={pokemons}
                renderItem={RenderItem}
                keyExtractor={(item) => item.name}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 4,
    },
})
