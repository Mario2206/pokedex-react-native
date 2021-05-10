import React from 'react'
import { useEffect } from 'react'
import { getPokemons } from '../services/pokemon.service'
import {
    pokemonListLoading,
    setPokemonList,
} from '../redux/slices/pokemon-list.slice'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import PokemonList from '../components/pokemon-list.component'

export default function PokemonListContainer() {
    const dispatch = useAppDispatch()
    const pokemons = useAppSelector((state) => state.pokemonList.pokemons)

    useEffect(() => {
        dispatch(pokemonListLoading())
        getPokemons().then((pokemons) => {
            dispatch(setPokemonList(pokemons))
        })
    }, [])

    return <PokemonList pokemons={pokemons} />
}
