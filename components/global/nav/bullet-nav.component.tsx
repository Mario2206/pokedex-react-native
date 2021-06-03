import React from 'react'
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native'
import { COLORS } from '../../../style/color.style'

interface BulletNavProps {
    tabs: string[]
    currentTab: string
    activeColor: string
    onPress: (tab: string) => void
}

export default function BulletNav({
    tabs,
    currentTab,
    activeColor,
    onPress,
}: BulletNavProps) {
    return (
        <View style={styles.container}>
            {tabs.map((tab, index) => (
                <TouchableOpacity
                    onPress={() => onPress(tab)}
                    key={index}
                    style={[
                        {
                            backgroundColor:
                                currentTab === tab ? activeColor : COLORS.white,
                        },
                        styles.tab,
                    ]}
                >
                    <Text
                        style={[
                            styles.tabText,
                            {
                                color:
                                    currentTab !== tab
                                        ? activeColor
                                        : COLORS.white,
                            },
                        ]}
                    >
                        {tab.toUpperCase()}
                    </Text>
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
        paddingVertical: 30,
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
