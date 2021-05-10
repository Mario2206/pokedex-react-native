import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { PokemonModel } from '../models/pokemon.model'
import { formatId } from '../helpers/pokemon.helper'
import { COLORS } from '../style/color.style'
import { FONT_SIZES } from '../style/size.style'
import TypeBadge from './type-badge.component'

interface PokemonItemProps {
    pokemon: PokemonModel
}

export default function PokemonItem({ pokemon }: PokemonItemProps) {
    return (
        <View style={styles.container}>
            <Image
                style={styles.miniature}
                source={{ uri: pokemon.sprites.front_default }}
            />
            <View style={styles.contentWrapper}>
                <View>
                    <Text style={styles.name}>{pokemon.name}</Text>
                    <Text style={styles.id}>#{formatId(pokemon.id, 3)}</Text>
                </View>
                <View style={styles.badgeWrapper}>
                    {pokemon.types.map((type, index) => (
                        <TypeBadge type={type} key={index} />
                    ))}
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 2,
        borderBottomColor: COLORS.lightGrey,
    },
    contentWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
    },
    miniature: {
        width: '20%',
        aspectRatio: 1,
    },
    id: {
        color: COLORS.grey,
    },
    name: {
        fontSize: FONT_SIZES.importantText,
        color: COLORS.black,
    },
    badgeWrapper: {
        display: 'flex',
        flexDirection: 'row',
    },
})
