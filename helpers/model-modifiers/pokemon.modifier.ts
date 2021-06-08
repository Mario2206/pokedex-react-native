import PokemonSpeciesService from '../../services/pokemon-species.service'
import { PokemonModel, PokemonType } from '../../models/pokemon.model'
import { Languages } from '../../configuration/languages'
import PokemonTypesService from '../../services/pokemon-types.service'
import EvolutionChainService from '../../services/evolution-chain.service'
import MovesService from '../../services/moves.service'

export const populateSpecies = async (
    pokemon: PokemonModel
): Promise<PokemonModel> => {
    const species = await PokemonSpeciesService.get(pokemon.species.url)
    pokemon.name = species.names[0].name || pokemon.name
    pokemon.species = species
    pokemon.evolutionChain = {
        url: species.evolutionChain?.url || '',
        chain: [],
    }
    return pokemon
}

export const translateTypes = async (
    pokemon: PokemonModel
): Promise<PokemonModel> => {
    const promises = pokemon.types.map(async (type: PokemonType) => {
        return PokemonTypesService.get(type.url)
    })
    const translatedTypes = await Promise.all(promises)
    return { ...pokemon, types: translatedTypes }
}

export async function addEvolutionChain(
    data: PokemonModel
): Promise<PokemonModel> {
    if (data.evolutionChain?.url) {
        const chain = await EvolutionChainService.get(data.evolutionChain.url)

        data.evolutionChain = { ...data.evolutionChain, chain }
    }

    return data
}

export async function addMoves(data: PokemonModel): Promise<PokemonModel> {
    const moves = await Promise.all(
        data.moves.map(async (move) => {
            return { ...move, move: await MovesService.get(move.move.url) }
        })
    )

    return { ...data, moves }
}
