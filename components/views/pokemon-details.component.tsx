import React, { ReactChildren } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { PokemonModel } from '../../models/pokemon.model'
import { LinearGradient } from 'expo-linear-gradient'
import { COLORS, POKE_TYPES } from '../../style/color.style'
import { FONT_SIZES } from '../../style/size.style'
import TypeLabel from '../labels/type-label.component'
import toFirstLetterUpperCase from '../../helpers/text.helper'

interface PokemonDetailsComponentProps {
    pokemon: PokemonModel | undefined
    children: JSX.Element | undefined
}

export default function PokemonDetailsComponent({
    pokemon,
    children,
}: PokemonDetailsComponentProps) {
    if (!pokemon) {
        return <Text>Loading</Text>
    }

    return (
        <LinearGradient
            style={styles.container}
            colors={POKE_TYPES.GRADIENTS[pokemon.types[0].name]}
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
                            type={type.name}
                            key={index}
                            displayName={type.display_name}
                        />
                    ))}
                </View>
                <Text style={styles.description}>
                    {pokemon.species.flavor_text_entries[0].flavor_text
                        .split('\n')
                        .join(' ')}
                </Text>
                {children}
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
        paddingHorizontal: 30,
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
    description: {
        width: '100%',
        textAlign: 'center',
        color: COLORS.black,
        fontSize: FONT_SIZES.text,
    },
})
