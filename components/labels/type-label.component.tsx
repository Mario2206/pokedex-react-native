import React from 'react'
import { StyleProp, StyleSheet, Text, View } from 'react-native'
import { COLORS, POKE_TYPES } from '../../style/color.style'
import { ELEMENT_ICONS } from '../../assets/icons.asset'

interface TypeLabelProps {
    type: keyof typeof POKE_TYPES.COLORS
    style?: StyleProp<any>
}

export default function TypeLabel({ type, style }: TypeLabelProps) {
    const Logo = ELEMENT_ICONS[type]
    const color = POKE_TYPES.COLORS[type]

    if (!color || !Logo) return null

    return (
        <View style={[{ backgroundColor: color }, styles.container, style]}>
            <Logo style={styles.logo} />
            <Text style={styles.text}>{type.toUpperCase()}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderRadius: 50,
        position: 'relative',
    },
    text: {
        color: COLORS.white,
        paddingHorizontal: 10,
    },
    logo: {
        marginRight: 10,
    },
})
