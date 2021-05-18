import React, { useEffect } from 'react'
import { PokemonModel } from '../models/pokemon.model'
import PokemonDetailsComponent from '../components/views/pokemon-details.component'
import { getPokemonFromState } from '../redux/selectors/pokemon.selector'
import { useAppDispatch } from '../redux/hooks'
import { loading, set } from '../redux/slices/pokemon.slice'
import PokemonService from '../services/pokemon.service'
import { Languages } from '../configuration/languages'

interface PokemonDetailsContainerProps {
    basePokemon: PokemonModel
}

export default function PokemonDetailsContainer({
    basePokemon,
}: PokemonDetailsContainerProps) {
    const pokemon = getPokemonFromState() || basePokemon
    const dispatch = useAppDispatch()

    console.log(pokemon.stats)
    useEffect(() => {
        dispatch(loading())
        new PokemonService(Languages.FR)
            .get(basePokemon.url)
            .then((pokemon) => {
                dispatch(set(pokemon))
            })
    }, [])

    return <PokemonDetailsComponent pokemon={pokemon} />
}
