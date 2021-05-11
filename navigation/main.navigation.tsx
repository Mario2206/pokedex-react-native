import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import PokemonNavigation from './pokemon/pokemon.navigation'
import MoveNavigation from './move/move.navigation'
import ItemNavigation from './item/item.navigation'

const Tab = createBottomTabNavigator()

export default function MainNavigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="pokemon" component={PokemonNavigation} />
                <Tab.Screen name="move" component={MoveNavigation} />
                <Tab.Screen name="item" component={ItemNavigation} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
