import React, { useEffect } from 'react'
import { MoveModel, PokemonMoves } from '../../../models/pokemon.model'
import { View, Text, StyleSheet } from 'react-native'
import TypeBadge from '../../labels/type-badge.component'
import { COLORS } from '../../../style/color.style'
import { FONT_SIZES } from '../../../style/size.style'
import PokeballLoader from '../../loaders/pokeball-loader.component'

interface MoveListProps {
    moves: PokemonMoves[] | null
    onMount?: VoidFunction
}

export default function MoveList({ moves, onMount }: MoveListProps) {
    useEffect(() => {
        if (!onMount) return
        onMount()
    }, [])

    if (!moves) {
        return <PokeballLoader />
    }

    const sortmoves = [...moves].sort(
        (move1, move2) => move1.level - move2.level
    )

    const Item = ({ item }: { item: { move: MoveModel; level: number } }) => (
        <View style={styles.itemContainer}>
            <View>
                <Text style={styles.title}>{item.move.names[0].name}</Text>
                <Text style={styles.level}>Nv. {item.level}</Text>
            </View>
            <TypeBadge type={item.move.type} />
        </View>
    )

    return (
        <View>
            {sortmoves.map((move, index) => (
                <Item item={move} key={index} />
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
