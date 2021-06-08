import { EvolutionChain, PokemonModel } from '../../models/pokemon.model'
import { filterByLang } from '../filters.helper'
import { Languages } from '../../configuration/languages'

export function convertToPokemonPreviewModel(
    data: Record<string, any>
): PokemonModel {
    return {
        sprites: data.sprites,
        name: data.name,
        id: data.id,
        types: data.types.map((item: any) => ({
            url: item.type.url,
            name: item.type.name,
            display_name: item.type.name,
        })),
        url: data.url,
        species: {
            names: data.species.name,
            url: data.species.url,
            flavor_text_entries: [],
            id: '',
        },
        moves: data.moves.map((move: any) => ({
            move: { url: move.move.url },
            level: move.version_group_details[0].level_learned_at,
        })),
    }
}

export function convertToPokemonModel(data: Record<string, any>): PokemonModel {
    const preview = convertToPokemonPreviewModel(data)
    return { ...preview, stats: data.stats }
}

export function convertToPokemonTypeModel(data: Record<string, any>) {
    return {
        url: data.url,
        name: data.name,
        display_name: filterByLang(Languages.FR, data.names)[0].name,
    }
}

export function convertToPokemonSpeciesModel(data: Record<string, any>) {
    return {
        id: data.id,
        names: filterByLang(Languages.FR, data.names),
        flavor_text_entries: filterByLang(
            Languages.FR,
            data.flavor_text_entries
        ),
        url: data.url,
        evolutionChain: {
            url: data.evolution_chain.url,
        },
    }
}

export function convertToEvolutionChainModel(
    chain: Record<string, any>
): EvolutionChain[] {
    const evolutions: EvolutionChain[] = []

    while (chain) {
        evolutions.push({
            id: chain.id,
            species: {
                url: chain.species.url,
                names: [],
                flavor_text_entries: [],
                id: '',
            },
            evolutionDetails: {
                minLevel: chain.evolution_details.minLevel,
            },
        })

        chain = chain.evolves_to[0]
    }

    return evolutions
}
