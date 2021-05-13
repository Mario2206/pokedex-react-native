import { useEffect } from 'react'
import { StackNavigationProp } from '@react-navigation/stack'

export function useDisableTabBar(navigation: StackNavigationProp<any>) {
    useEffect(() => {
        const parent = navigation.dangerouslyGetParent()
        if (parent) {
            parent.setOptions({ tabBarVisible: false })

            return () => parent.setOptions({ tabBarVisible: true })
        }
    }, [])
}
