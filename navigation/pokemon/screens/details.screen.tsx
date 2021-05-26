import React from 'react'

import { StackNavigationProp } from '@react-navigation/stack'
import { PokemonStackParamList } from '../pokemon.navigation'
import { RouteProp } from '@react-navigation/native'
import { useDisableTabBar } from '../../../hooks/tab-bar.hook'
import PokemonDetailsComponent from '../../../components/views/pokemon-details.component'
import usePokemonDetails from '../../../hooks/logic/pokemon-details.hook'
import TabNavigator from '../../../components/tab/tab-navigator.component'
import { POKE_TYPES } from '../../../style/color.style'
import { Text } from 'react-native'
import Statistics from '../../../components/views/statistics.component'

interface DetailsScreenProps {
    navigation: StackNavigationProp<PokemonStackParamList, 'Details'>
    route: RouteProp<PokemonStackParamList, 'Details'>
}

export default function DetailsScreen({
    navigation,
    route,
}: DetailsScreenProps) {
    useDisableTabBar(navigation)
    const { pokemon, stats } = usePokemonDetails({
        basePokemon: route.params.pokemon,
    })

    const tabs = [
        {
            name: 'stats',
            component: <Statistics items={stats} />,
        },
        {
            name: 'evolutions',
            component: <Text>2</Text>,
        },
        {
            name: 'moves',
            component: <Text>3</Text>,
        },
    ]

    return (
        <PokemonDetailsComponent pokemon={pokemon}>
            {pokemon && (
                <TabNavigator
                    tabs={tabs}
                    activeColor={POKE_TYPES.COLORS[pokemon.types[0].name]}
                />
            )}
        </PokemonDetailsComponent>
    )
}
