import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { EvolutionChain } from '../../../models/pokemon.model'
import { fetchImage } from '../../../helpers/pokemon.helper'
import { COLORS } from '../../../style/color.style'

const EvolutionArrow = require('../../../assets/evolution-arrow.svg').default

interface EvolutionItemProps {
    pokemon: EvolutionChain
    nextPokemon: EvolutionChain
}

function EvolutionItem({ pokemon, nextPokemon }: EvolutionItemProps) {
    return (
        <View style={styles.container}>
            <View style={styles.parts}>
                <Image
                    style={styles.miniature}
                    source={{
                        uri: fetchImage(pokemon.species.id),
                    }}
                />
                <Text style={styles.name}>{pokemon.species.names[0].name}</Text>
            </View>
            <View style={styles.parts}>
                <EvolutionArrow />
            </View>
            <View style={styles.parts}>
                <Image
                    style={styles.miniature}
                    source={{
                        uri: fetchImage(nextPokemon.species.id),
                    }}
                />
                <Text style={styles.name}>
                    {nextPokemon.species.names[0].name}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginVertical: 20,
        paddingBottom: 30,
        borderBottomWidth: 2,
        borderBottomColor: COLORS.lightGrey,
    },
    parts: {
        width: '30%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    name: {
        color: COLORS.black,
        marginTop: 15,
    },
    miniature: {
        width: '85%',
        aspectRatio: 1,
        flex: 1,
    },
})

export default React.memo(EvolutionItem)
