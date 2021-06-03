import React, { useEffect } from 'react'
import { PokemonMoves } from '../../../models/pokemon.model'
import { View, Text, StyleSheet } from 'react-native'
import { COLORS } from '../../../style/color.style'
import { FONT_SIZES } from '../../../style/size.style'
import PokeballLoader from '../../global/loaders/pokeball-loader.component'
import MoveItem from '../../move/list/move-item.component'
import { MoveModel } from '../../../models/move.model'

interface MoveListProps {
    moves: PokemonMoves[] | null
    onMount?: VoidFunction
    onPressItem?: (move: PokemonMoves) => void
}

export default function MoveList({
    moves,
    onMount,
    onPressItem,
}: MoveListProps) {
    useEffect(() => {
        if (!onMount) return
        onMount()
    }, [])

    if (!moves) {
        return <PokeballLoader />
    }

    return (
        <View>
            {moves.map((move, index: number) => (
                <MoveItem
                    onPress={onPressItem ? () => onPressItem(move) : undefined}
                    item={move}
                    key={index}
                />
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomColor: COLORS.lightGrey,
        borderBottomWidth: 2,
        paddingVertical: 10,
    },
    title: {
        color: COLORS.black,
        fontSize: FONT_SIZES.importantText,
    },
    level: {
        color: COLORS.grey,
    },
})
