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
import { BASE_STATS, STATS } from '../../configuration/pokemon'
import { POKE_TYPES } from '../../style/color.style'

interface usePokemonDetailsProps {
    basePokemon: PokemonPreviewModel
}

export default function usePokemonDetails({
    basePokemon,
}: usePokemonDetailsProps) {
    const pokemon = getPokemonFromState()
    const dispatch = useAppDispatch()

    const stats =
        pokemon?.stats.map((stat) => ({
            label: STATS[stat.stat.name],
            value: stat.base_stat,
            maxValue: BASE_STATS.maxValue,
            color: POKE_TYPES.COLORS[pokemon?.types[0].name],
            gradientColor: POKE_TYPES.GRADIENTS[pokemon?.types[0].name],
        })) || []

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
        stats,
    }
}
