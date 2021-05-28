import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import PokemonNavigation from './pokemon/pokemon.navigation'
import MoveNavigation from './move/move.navigation'
import ItemNavigation from './item/item.navigation'
import { COLORS } from '../style/color.style'

const PikachuIcon = require('../assets/menu/pikachu.svg').default
const DiskIcon = require('../assets/menu/disk.svg').default
const CandyIcon = require('../assets/menu/candy.svg').default

const Tab = createBottomTabNavigator()

export default function MainNavigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                tabBarOptions={{
                    activeBackgroundColor: COLORS.red,
                    inactiveBackgroundColor: COLORS.red,
                }}
            >
                <Tab.Screen
                    options={{
                        tabBarIcon: () => <PikachuIcon />,
                    }}
                    name="pokemon"
                    component={PokemonNavigation}
                />
                <Tab.Screen
                    options={{ tabBarIcon: () => <DiskIcon /> }}
                    name="move"
                    component={MoveNavigation}
                />
                <Tab.Screen
                    options={{ tabBarIcon: () => <CandyIcon /> }}
                    name="item"
                    component={ItemNavigation}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
