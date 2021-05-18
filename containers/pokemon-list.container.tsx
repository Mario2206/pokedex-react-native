import React, { useEffect } from 'react'
import {
    addToPokemonList,
    incrementPage,
    pokemonListLoading,
} from '../redux/slices/pokemon-list.slice'
import PokemonList from '../components/lists/pokemon-list.component'
import { PokemonModel } from '../models/pokemon.model'
import {
    getPokemonLoadingFromState,
    getPokemonPageFromState,
    getPokemonsFromState,
} from '../redux/selectors/pokemon.selector'
import { useAppDispatch } from '../redux/hooks'
import { Languages } from '../configuration/languages'
import { PokemonPreviewService } from '../services/pokemon-preview.service'

interface PokemonListContainerProps {
    navigateToDetails: (pokemon: PokemonModel) => void
}

export default function PokemonListContainer({
    navigateToDetails,
}: PokemonListContainerProps) {
    const dispatch = useAppDispatch()
    const pokemons = getPokemonsFromState()
    const page = getPokemonPageFromState()
    const loading = getPokemonLoadingFromState()

    useEffect(() => {
        if (loading) return
        dispatch(pokemonListLoading())
        new PokemonPreviewService(Languages.FR)
            .getAll(page * 20, 20)
            .then((pokemons) => {
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
