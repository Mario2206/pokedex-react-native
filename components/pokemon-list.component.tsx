import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import PokemonItem from './pokemon-item.component'
import { PokemonModel } from '../models/pokemon.model'
import { detectScrollToBottom } from '../helpers/scroll.helper'

interface PokemonListProps {
    pokemons: PokemonModel[]
    onEndScroll: () => void
}

export default function PokemonListView({
    pokemons,
    onEndScroll,
}: PokemonListProps) {
    const RenderItem = ({ item }: { item: PokemonModel }) => (
        <PokemonItem pokemon={item} />
    )

    return (
        <View style={styles.container}>
            <FlatList
                data={pokemons}
                renderItem={RenderItem}
                keyExtractor={(item) => item.name}
                onScroll={detectScrollToBottom(onEndScroll)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 4,
    },
})
