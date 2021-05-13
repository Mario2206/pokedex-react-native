import React from 'react'
import { useEffect } from 'react'
import {
    pokemonListLoading,
    addToPokemonList,
    incrementPage,
} from '../redux/slices/pokemon-list.slice'
import PokemonList from '../components/lists/pokemon-list.component'
import { GetServiceType } from '../services/types/get.service.type'
import { PokemonModel } from '../models/pokemon.model'
import {
    getPokemonLoadingFromState,
    getPokemonPageFromState,
    getPokemonsFromState,
} from '../redux/selectors/pokemon.selector'
import { useAppDispatch } from '../redux/hooks'

interface PokemonListContainerProps {
    pokemonService: GetServiceType<PokemonModel>
    navigateToDetails: (pokemon: PokemonModel) => void
}

export default function PokemonListContainer({
    pokemonService,
    navigateToDetails,
}: PokemonListContainerProps) {
    const dispatch = useAppDispatch()
    const pokemons = getPokemonsFromState()
    const page = getPokemonPageFromState()
    const loading = getPokemonLoadingFromState()

    useEffect(() => {
        if (loading) return
        dispatch(pokemonListLoading())
        pokemonService.getAll(page * 20, 20).then((pokemons) => {
            dispatch(addToPokemonList(pokemons))
        })
    }, [page])

    function populatePokemonList() {
        if (loading) return
        dispatch(incrementPage())
    }

    function onClickPokemonItem(pokemon: PokemonModel) {
        navigateToDetails(pokemon)
    }

    return (
        <PokemonList
            pokemons={pokemons}
            onEndScroll={populatePokemonList}
            onClickItem={onClickPokemonItem}
        />
    )
}
