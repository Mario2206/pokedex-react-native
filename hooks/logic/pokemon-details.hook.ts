import { getPokemonFromState } from '../../redux/selectors/pokemon.selector'
import { useAppDispatch } from '../../redux/hooks'
import { useEffect } from 'react'
import {
    clearPokemonState,
    loading,
    setPokemonState,
} from '../../redux/slices/pokemon.slice'
import PokemonService from '../../services/pokemon.service'
import { Languages } from '../../configuration/languages'
import { PokemonPreviewModel } from '../../models/pokemon.model'

interface usePokemonDetailsProps {
    basePokemon: PokemonPreviewModel
}

export default function usePokemonDetails({
    basePokemon,
}: usePokemonDetailsProps) {
    const pokemon = getPokemonFromState()
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(loading())
        new PokemonService(Languages.FR)
            .get(basePokemon.url)
            .then((pokemon) => {
                dispatch(setPokemonState(pokemon))
            })

        return () => {
            dispatch(clearPokemonState())
        }
    }, [])

    return {
        pokemon,
    }
}
