import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import PokemonNavigation from './pokemon/pokemon.navigation'
import MoveNavigation from './move/move.navigation'
import ItemNavigation from './item/item.navigation'
import { COLORS } from '../style/color.style'
import PikachuIcon from '../components/global/icons/pikachu-icon.component'
import DiskIcon from '../components/global/icons/disk-icon.component'
import CandyIcon from '../components/global/icons/candy-icon.component'

const Tab = createBottomTabNavigator()

export default function MainNavigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                tabBarOptions={{
                    activeBackgroundColor: COLORS.red,
                    inactiveBackgroundColor: COLORS.red,
                    activeTintColor: COLORS.black,
                    inactiveTintColor: COLORS.white,
                    // style: { padding: 10 },
                }}
            >
                <Tab.Screen
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <PikachuIcon isFocused={focused} />
                        ),
                    }}
                    name="pokemon"
                    component={PokemonNavigation}
                />
                <Tab.Screen
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <DiskIcon isFocused={focused} />
                        ),
                    }}
                    name="move"
                    component={MoveNavigation}
                />
                <Tab.Screen
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <CandyIcon isFocused={focused} />
                        ),
                    }}
                    name="item"
                    component={ItemNavigation}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
