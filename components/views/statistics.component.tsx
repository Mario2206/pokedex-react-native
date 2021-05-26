import React from 'react'
import { View } from 'react-native'
import StatisticItem from './statistic-item.component'

interface StatisticsProps {
    items: {
        label: string
        value: number
        maxValue: number
        color: string
        gradientColor: string[]
    }[]
}

export default function Statistics({ items }: StatisticsProps) {
    return (
        <View>
            {items.map((item) => (
                <StatisticItem {...item} />
            ))}
        </View>
    )
}
