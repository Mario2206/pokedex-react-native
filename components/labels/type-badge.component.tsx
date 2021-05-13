import React from 'react'
import { StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { POKE_TYPES } from '../../style/color.style'
import { Dimensions } from 'react-native'
import { ELEMENT_ICONS } from '../../assets/icons.asset'

interface TypeBadgeProps {
    type: keyof typeof POKE_TYPES.COLORS
}

export default function TypeBadge({ type }: TypeBadgeProps) {
    const Logo = ELEMENT_ICONS[type]
    const gradient = POKE_TYPES.GRADIENTS[type]
    const color = POKE_TYPES.COLORS[type]

    if (!Logo || !gradient || !color) {
        return null
    }

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
        >
            <Logo width={'60%'} height={'60%'} />
        </LinearGradient>
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
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
