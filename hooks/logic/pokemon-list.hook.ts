import { useAppDispatch } from '../../redux/hooks'
import {
    getPokemonLoadingFromState,
    getPokemonPageFromState,
    getPokemonsFromState,
} from '../../redux/selectors/pokemon.selector'
import { useEffect } from 'react'
import {
    addToPokemonList,
    incrementPage,
    pokemonListLoading,
} from '../../redux/slices/pokemon-list.slice'
import { PokemonModel } from '../../models/pokemon.model'
import PokemonService from '../../services/pokemon.service'
import { MAX_ITEMS_BY_PAGE } from '../../configuration/list'

interface usePokemonListProps {
    navigateToDetails: (pokemon: PokemonModel) => void
}

export default function usePokemonList({
    navigateToDetails,
}: usePokemonListProps) {
    const dispatch = useAppDispatch()
    const pokemons = getPokemonsFromState()
    const page = getPokemonPageFromState()
    const loading = getPokemonLoadingFromState()

    useEffect(() => {
        if (loading) return
        dispatch(pokemonListLoading())
        PokemonService.getAllPreviews(
            page * MAX_ITEMS_BY_PAGE,
            MAX_ITEMS_BY_PAGE
        ).then((pokemons) => {
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

    return {
        pokemons,
        loading,
        onClickPokemonItem,
        populatePokemonList,
    }
}
