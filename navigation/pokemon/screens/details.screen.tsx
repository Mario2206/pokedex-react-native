import React from 'react'
import { StackNavigationProp } from '@react-navigation/stack'
import { PokemonStackParamList } from '../pokemon.navigation'
import { RouteProp } from '@react-navigation/native'
import { useDisableTabBar } from '../../../hooks/tab-bar.hook'
import PokemonDetailsComponent from '../../../components/pokemon/views/pokemon-details.component'
import usePokemonDetails from '../../../hooks/logic/pokemon-details.hook'
import TabNavigator from '../../../components/global/tab/tab-navigator.component'
import { POKE_TYPES } from '../../../style/color.style'
import Statistics from '../../../components/pokemon/views/statistics.component'
import EvolutionList from '../../../components/pokemon/lists/evolution-list.component'
import MoveList from '../../../components/pokemon/lists/move-list.component'
import { getPokemonMovesFromState } from '../../../redux/selectors/pokemon.selector'

interface DetailsScreenProps {
    navigation: StackNavigationProp<PokemonStackParamList, 'Details'>
    route: RouteProp<PokemonStackParamList, 'Details'>
}

export default function DetailsScreen({
    navigation,
    route,
}: DetailsScreenProps) {
    useDisableTabBar(navigation)
    const { pokemon, stats, fetchPokemonMove } = usePokemonDetails({
        basePokemon: route.params.pokemon,
    })

    const tabs = [
        {
            name: 'stats',
            component: () => <Statistics items={stats} />,
        },
        {
            name: 'evolutions',
            component: () => (
                <EvolutionList
                    evolutionChain={pokemon?.evolutionChain?.chain || []}
                />
            ),
        },
        {
            name: 'moves',
            component: () => (
                <MoveList
                    onMount={fetchPokemonMove}
                    moves={getPokemonMovesFromState()}
                />
            ),
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
