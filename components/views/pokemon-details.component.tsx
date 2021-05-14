import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { PokemonModel } from '../../models/pokemon.model'
import { LinearGradient } from 'expo-linear-gradient'
import { COLORS, POKE_TYPES } from '../../style/color.style'
import { FONT_SIZES } from '../../style/size.style'
import TypeLabel from '../labels/type-label.component'
import toFirstLetterUpperCase from '../../helpers/text.helper'

interface PokemonDetailsComponentProps {
    pokemon: PokemonModel
}

export default function PokemonDetailsComponent({
    pokemon,
}: PokemonDetailsComponentProps) {
    console.log(pokemon.types)
    return (
        <LinearGradient
            style={styles.container}
            colors={POKE_TYPES.GRADIENTS[pokemon.types[0]]}
        >
            <View style={styles.subContainer}>
                <Image
                    source={{ uri: pokemon.sprites.front_default }}
                    style={styles.image}
                />
                <Text style={styles.name}>
                    {toFirstLetterUpperCase(pokemon.name)}
                </Text>
                <View style={styles.labelWrapper}>
                    {pokemon.types.map((type, index) => (
                        <TypeLabel
                            style={styles.label}
                            type={type}
                            key={index}
                        />
                    ))}
                </View>
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
    },
    subContainer: {
        backgroundColor: COLORS.white,
        flex: 0.75,
        borderTopRightRadius: 60,
        borderTopLeftRadius: 60,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
    },
    image: {
        width: '80%',
        aspectRatio: 1,
        position: 'absolute',
        top: '-30%',
    },
    name: {
        textAlign: 'center',
        fontSize: FONT_SIZES.title,
        marginTop: 100,
    },
    labelWrapper: {
        paddingVertical: 20,
    },
    label: {
        marginVertical: 10,
    },
})
