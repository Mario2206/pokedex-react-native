import React from 'react'
import MoveDetails from '../../../components/move/views/move-details.component'
import { useDisableTabBar } from '../../../hooks/tab-bar.hook'
import { StackNavigationProp } from '@react-navigation/stack'
import { MoveStackParamList } from '../move.navigation'
import { RouteProp } from '@react-navigation/native'

interface MoveDetailsScreenProps {
    navigation: StackNavigationProp<MoveStackParamList, 'MoveDetails'>
    route: RouteProp<MoveStackParamList, 'MoveDetails'>
}

export default function MoveDetailsScreen({
    navigation,
    route,
}: MoveDetailsScreenProps) {
    useDisableTabBar(navigation)
    return <MoveDetails move={route.params.move} />
}
