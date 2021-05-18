import React from 'react'
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native'
import { COLORS } from '../../style/color.style'

interface PokemonNavProps {
    tabs: string[]
    activeColor: string
}

export default function PokemonNav({ tabs, activeColor }: PokemonNavProps) {
    return (
        <View style={styles.container}>
            {tabs.map((tab, index) => (
                <TouchableOpacity
                    style={[{ backgroundColor: activeColor }, styles.tab]}
                >
                    <Text style={styles.tabText}>{tab.toUpperCase()}</Text>
                </TouchableOpacity>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingVertical: 20,
    },
    tab: {
        paddingVertical: 15,
        paddingHorizontal: 25,
        borderRadius: 100,
    },
    tabText: {
        color: COLORS.white,
    },
})
