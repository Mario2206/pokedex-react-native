import { PokemonModel, PokemonPreviewModel } from '../models/pokemon.model'

export function convertToPokemonModel(
    data: Record<string, any>
): PokemonPreviewModel {
    return {
        sprites: data.sprites,
        name: data.name,
        id: data.id,
        types: data.types.map((item: any) => item.type.name),
        url: data.url,
    }
}
