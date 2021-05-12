import React from 'react'
import { useEffect } from 'react'
import {
    pokemonListLoading,
    setPokemonList,
} from '../redux/slices/pokemon-list.slice'
import PokemonList from '../components/pokemon-list.component'
import { GetServiceType } from '../services/types/get.service.type'
import { PokemonModel } from '../models/pokemon.model'
import {
    getPokemonPageFromState,
    getPokemonsFromState,
} from '../redux/selectors/pokemon.selector'
import { useAppDispatch } from '../redux/hooks'

interface PokemonListContainerProps {
    pokemonService: GetServiceType<PokemonModel>
}

export default function PokemonListContainer({
    pokemonService,
}: PokemonListContainerProps) {
    const dispatch = useAppDispatch()
    const pokemons = getPokemonsFromState()
    const page = getPokemonPageFromState()

    useEffect(() => {
        dispatch(pokemonListLoading())
        pokemonService.getAll().then((pokemons) => {
            dispatch(setPokemonList(pokemons))
        })
    }, [])

    function populatePokemonList() {
        pokemonService.getAll(page * 20, 20)
    }

    return <PokemonList pokemons={pokemons} onEndScroll={populatePokemonList} />
}
