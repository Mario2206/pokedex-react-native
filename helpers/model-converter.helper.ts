import { PokemonModel } from '../models/pokemon.model'

export function convertToPokemonModel(data: Record<string, any>): PokemonModel {
    return {
        sprites: data.sprites,
        name: data.name,
        id: data.id,
        types: data.types.map((item: any) => item.type.name),
    }
}
