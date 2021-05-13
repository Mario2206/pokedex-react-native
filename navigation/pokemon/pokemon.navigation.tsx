import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './screens/home.screen'
import DetailsScreen from './screens/details.screen'
import { PokemonModel } from '../../models/pokemon.model'

export type PokemonStackParamList = {
    Home: undefined
    Details: { pokemon: PokemonModel }
}

const Stack = createStackNavigator<PokemonStackParamList>()

export default function PokemonNavigation() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
    )
}
