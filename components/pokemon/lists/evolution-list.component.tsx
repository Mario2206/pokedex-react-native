import React from 'react'
import { View } from 'react-native'
import { EvolutionChain } from '../../../models/pokemon.model'
import EvolutionItem from './evolution-item.component'

interface EvolutionListProps {
    evolutionChain: EvolutionChain[]
}

export default function EvolutionList({ evolutionChain }: EvolutionListProps) {
    const formatedList = evolutionChain
        .map((chain, index) => {
            if (index === evolutionChain.length - 1) {
                return []
            }
            return [chain, evolutionChain[index + 1]]
        })
        .filter((val) => val.length > 0)

    return (
        <View>
            {formatedList.map((item, index) => (
                <EvolutionItem
                    pokemon={item[0]}
                    nextPokemon={item[1]}
                    key={index}
                />
            ))}
        </View>
    )
}
