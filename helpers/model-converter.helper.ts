import { PokemonModel, PokemonPreviewModel } from '../models/pokemon.model'

export function convertToPokemonPreviewModel(
    data: Record<string, any>
): PokemonPreviewModel {
    return {
        sprites: data.sprites,
        name: data.name,
        id: data.id,
        types: data.types.map((item: any) => item.type.name),
        url: data.url,
        species: {
            name: data.species.name,
            url: data.species.url,
        },
    }
}

export function completeWithDetails(previewPokemon: PokemonPreviewModel) {}
