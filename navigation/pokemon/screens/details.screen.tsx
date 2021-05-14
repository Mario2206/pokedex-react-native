import React, { useEffect } from 'react'

import { StackNavigationProp } from '@react-navigation/stack'
import { PokemonStackParamList } from '../pokemon.navigation'
import PokemonService from '../../../services/pokemon.service'
import { RouteProp } from '@react-navigation/native'
import PokemonDetailsContainer from '../../../containers/pokemon-details.container'
import { useDisableTabBar } from '../../../hooks/tab-bar.hook'
import { Languages } from '../../../configuration/languages'

interface DetailsScreenProps {
    navigation: StackNavigationProp<PokemonStackParamList, 'Details'>
    route: RouteProp<PokemonStackParamList, 'Details'>
}

const pokemonService = new PokemonService(Languages.FR)

export default function DetailsScreen({
    navigation,
    route,
}: DetailsScreenProps) {
    useDisableTabBar(navigation)

    return (
        <PokemonDetailsContainer
            pokemonService={pokemonService}
            basePokemon={route.params.pokemon}
        />
    )
}
