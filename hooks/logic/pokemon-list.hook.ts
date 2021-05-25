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
import { PokemonPreviewService } from '../../services/pokemon-preview.service'
import { Languages } from '../../configuration/languages'
import { PokemonModel } from '../../models/pokemon.model'

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

    return {
        pokemons,
        loading,
        onClickPokemonItem,
        populatePokemonList,
    }
}
