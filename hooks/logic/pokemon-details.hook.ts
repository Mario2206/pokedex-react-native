import {
    getPokemonMovesFromState,
    getPokemonFromState,
} from '../../redux/selectors/pokemon.selector'
import { useAppDispatch } from '../../redux/hooks'
import { useEffect, useState } from 'react'
import {
    clearPokemonState,
    loading,
    setPokemonState,
    setMovesState,
} from '../../redux/slices/pokemon.slice'
import PokemonService from '../../services/pokemon.service'
import { Languages } from '../../configuration/languages'
import { BASE_STATS, STATS } from '../../configuration/pokemon'
import { POKE_TYPES } from '../../style/color.style'
import { PokemonModel } from '../../models/pokemon.model'
import { addMoves } from '../../helpers/model-modifiers/pokemon.modifier'

interface usePokemonDetailsProps {
    basePokemon: PokemonModel
}

export default function usePokemonDetails({
    basePokemon,
}: usePokemonDetailsProps) {
    const pokemon = getPokemonFromState()
    const dispatch = useAppDispatch()
    const moves = getPokemonMovesFromState()

    const stats =
        pokemon?.stats?.map((stat) => ({
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
            .catch((e) => {
                console.log(e)
            })

        return () => {
            dispatch(clearPokemonState())
        }
    }, [])

    const fetchPokemonMove = async () => {
        if (pokemon && !moves) {
            addMoves(Languages.FR)(pokemon).then((newPokemon) => {
                /*  console.log({ newPokemon: newPokemon.moves })*/
                const sortmoves = [...newPokemon.moves].sort(
                    (move1, move2) => move1.level - move2.level
                )

                dispatch(setMovesState(sortmoves))
            })
        }
    }

    return {
        pokemon,
        stats,
        fetchPokemonMove,
        moves,
    }
}
