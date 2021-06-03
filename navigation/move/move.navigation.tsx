import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './screens/home.screen'
import { MoveModel } from '../../models/move.model'
import DetailsScreen from '../move/screens/details.screen'

export type MoveStackParamList = {
    Home: undefined
    MoveDetails: { move: MoveModel }
}

const Stack = createStackNavigator<MoveStackParamList>()

export default function MoveNavigation() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="MoveDetails" component={DetailsScreen} />
        </Stack.Navigator>
    )
}
