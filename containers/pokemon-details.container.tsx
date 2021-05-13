import React, { useEffect } from 'react'
import { GetServiceType } from '../services/types/get.service.type'
import { PokemonModel } from '../models/pokemon.model'
import PokemonDetailsComponent from '../components/views/pokemon-details.component'
import { getPokemonFromState } from '../redux/selectors/pokemon.selector'
import { useAppDispatch } from '../redux/hooks'
import { loading, set } from '../redux/slices/pokemon.slice'

interface PokemonDetailsContainerProps {
    pokemonService: GetServiceType<PokemonModel>
    basePokemon: PokemonModel
}

export default function PokemonDetailsContainer({
    pokemonService,
    basePokemon,
}: PokemonDetailsContainerProps) {
    const pokemon = getPokemonFromState() || basePokemon
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(loading())
        pokemonService.get(basePokemon.url).then((pokemon) => {
            dispatch(set(pokemon))
        })
    }, [])

    return <PokemonDetailsComponent pokemon={pokemon} />
}
