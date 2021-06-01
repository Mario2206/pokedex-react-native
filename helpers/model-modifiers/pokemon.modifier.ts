import PokemonSpeciesService from '../../services/pokemon-species.service'
import { PokemonModel, PokemonType } from '../../models/pokemon.model'
import { Languages } from '../../configuration/languages'
import PokemonTypesService from '../../services/pokemon-types.service'
import EvolutionChainService from '../../services/evolution-chain.service'
import MovesService from '../../services/moves.service'

export function populateSpecies<T extends PokemonModel>(language: Languages) {
    const pokemonSpeciesService = new PokemonSpeciesService(language)
    return async (pokemon: T): Promise<T> => {
        const species = await pokemonSpeciesService.get(pokemon.species.url)
        pokemon.name = species.names[0].name || pokemon.name
        pokemon.species = species
        pokemon.evolutionChain = {
            url: species.evolutionChain?.url || '',
            chain: [],
        }
        return pokemon
    }
}

export function translateTypes<T extends PokemonModel>(language: Languages) {
    const pokemonTypeService = new PokemonTypesService(language)
    return async (pokemon: T): Promise<T> => {
        const promises = pokemon.types.map(async (type: PokemonType) => {
            return await pokemonTypeService.get(type.url)
        })
        const translatedTypes = await Promise.all(promises)
        return { ...pokemon, types: translatedTypes }
    }
}

export function addEvolutionChain<T extends PokemonModel>(language: Languages) {
    return async (data: PokemonModel): Promise<PokemonModel> => {
        if (data.evolutionChain?.url) {
            const chain = await new EvolutionChainService(language).get(
                data.evolutionChain.url
            )

            data.evolutionChain = { ...data.evolutionChain, chain }
        }

        return data
    }
}

export function addMoves<T extends PokemonModel>(language: Languages) {
    return async (data: PokemonModel): Promise<PokemonModel> => {
        const moveService = new MovesService(language)

        const moves = await Promise.all(
            data.moves.map(async (move) => {
                return { ...move, move: await moveService.get(move.move.url) }
            })
        )

        return { ...data, moves }
    }
}
