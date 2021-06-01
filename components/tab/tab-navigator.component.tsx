import React, { useState } from 'react'
import { StyleProp, StyleSheet, View } from 'react-native'
import BulletNav from '../nav/bullet-nav.component'

interface TabNavigatorProps {
    tabs: { name: string; component: React.ReactNode }[]
    activeColor: string
    style?: StyleProp<any>
}

export default function TabNavigator({
    tabs,
    activeColor,
    style,
}: TabNavigatorProps) {
    const [selectedTab, setSelectedTab] = useState<any>(tabs[0])

    const onPress = (tab: string) => {
        setSelectedTab(tabs.find((item) => item.name === tab))
    }

    const Component = selectedTab.component

    return (
        <View>
            <BulletNav
                currentTab={selectedTab.name}
                tabs={tabs.map((tab) => tab.name)}
                activeColor={activeColor}
                onPress={onPress}
            />
            <View style={style}>
                <Component />
            </View>
        </View>
    )
}
