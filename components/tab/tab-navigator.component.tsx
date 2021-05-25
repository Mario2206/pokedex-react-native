import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import BulletNav from '../nav/bullet-nav.component'

interface TabNavigatorProps {
    tabs: { name: string; component: React.ReactNode }[]
    activeColor: string
}

export default function TabNavigator({ tabs, activeColor }: TabNavigatorProps) {
    const [selectedTab, setSelectedTab] = useState<any>(tabs[0])

    const onPress = (tab: string) => {
        setSelectedTab(tabs.find((item) => item.name === tab))
    }

    return (
        <View>
            <BulletNav
                currentTab={selectedTab.name}
                tabs={tabs.map((tab) => tab.name)}
                activeColor={activeColor}
                onPress={onPress}
            />
            <View>{selectedTab.component}</View>
        </View>
    )
}
