import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { COLORS } from '../../../style/color.style'
import { LinearGradient } from 'expo-linear-gradient'

interface StatisticItemProps {
    label: string
    value: number
    maxValue: number
    color: string
    gradientColor: string[]
}

export default function StatisticItem({
    label,
    value,
    maxValue,
    color,
    gradientColor,
}: StatisticItemProps) {
    return (
        <View style={styles.container}>
            <View style={styles.labelWrapper}>
                <Text style={{ color }}>{label.toUpperCase()}</Text>
                <Text style={styles.statNumber}>{value}</Text>
            </View>
            <View style={styles.bgBar}>
                <LinearGradient
                    style={[
                        styles.bar,
                        { width: `${(value / maxValue) * 100}%` },
                    ]}
                    colors={gradientColor}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        marginBottom: 10,
    },
    labelWrapper: {
        width: '20%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    statNumber: {
        color: COLORS.black,
    },
    bgBar: {
        flex: 1,
        backgroundColor: COLORS.lightGrey,
        marginLeft: 10,
        height: 11,
        borderRadius: 100,
    },
    bar: {
        height: '100%',
        borderRadius: 100,
    },
})
