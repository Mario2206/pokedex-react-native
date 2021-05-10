import React from 'react'
import { StyleSheet, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { POKE_TYPES } from '../style/color.style'
import { Dimensions } from 'react-native'

interface TypeBadgeProps {
    type: keyof typeof POKE_TYPES.COLORS
}

export default function TypeBadge({ type }: TypeBadgeProps) {
    return (
        <LinearGradient
            colors={POKE_TYPES.GRADIENTS[type]}
            style={[
                styles.container,
                {
                    width: Dimensions.get('window').width * 0.1,
                    shadowColor: POKE_TYPES.COLORS[type],
                },
            ]}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        aspectRatio: 1,
        borderRadius: 100,
        shadowOffset: { width: 10, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 10,
        elevation: 5,
        margin: 7,
    },
})
