import React from 'react'
import { FlatList, GestureResponderEvent, StyleSheet, View } from 'react-native'
import PokemonItem from './pokemon-item.component'
import { PokemonModel, PokemonPreviewModel } from '../../models/pokemon.model'
import { detectScrollToBottom } from '../../helpers/scroll.helper'

interface PokemonListProps {
    pokemons: PokemonModel[]
    onEndScroll: () => void
    onClickItem: (pokemon: PokemonModel) => void
}

export default function PokemonListView({
    pokemons,
    onEndScroll,
    onClickItem,
}: PokemonListProps) {
    const RenderItem = ({ item }: { item: PokemonModel }) => (
        <PokemonItem pokemon={item} onPress={() => onClickItem(item)} />
    )

    return (
        <View style={styles.container}>
            <FlatList
                data={pokemons}
                renderItem={RenderItem}
                keyExtractor={(item) => String(item.id)}
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
