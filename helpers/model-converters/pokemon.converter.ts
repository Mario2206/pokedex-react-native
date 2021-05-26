import {
    EvolutionChain,
    PokemonModel,
    PokemonPreviewModel,
} from '../../models/pokemon.model'
import { filterByLang } from '../filters.helper'
import { Languages } from '../../configuration/languages'

export function convertToPokemonPreviewModel(
    data: Record<string, any>
): PokemonPreviewModel {
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
        },
    }
}

export function convertToPokemonModel(data: Record<string, any>): PokemonModel {
    const preview = convertToPokemonPreviewModel(data)
    return { ...preview, stats: data.stats, evolutionChain: [] }
}

export function convertToPokemonTypeModel(language: Languages) {
    return (data: Record<string, any>) => {
        return {
            url: data.url,
            name: data.name,
            display_name: filterByLang(language, data.names)[0].name,
        }
    }
}

export function convertToPokemonSpeciesModel(language: Languages) {
    return (data: Record<string, any>) => {
        return {
            names: filterByLang(language, data.names),
            flavor_text_entries: filterByLang(
                language,
                data.flavor_text_entries
            ),
            url: data.url,
        }
    }
}

//!TODO : TEST
export function convertToEvolutionChainModel(language: Languages) {
    return (data: Record<string, any>): EvolutionChain[] => {
        const evolutions: EvolutionChain[] = []
        let chain = data.chain

        while (chain) {
            evolutions.push({
                species: {
                    url: chain.species,
                    names: [],
                    flavor_text_entries: [],
                },
                evolutionDetails: {
                    minLevel: chain.evolution_details.minLevel,
                },
            })

            chain = chain.evolves_to[0]
        }

        return evolutions
    }
}
