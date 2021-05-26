import PokemonSpeciesService from '../../services/pokemon-species.service'
import { PokemonPreviewModel, PokemonType } from '../../models/pokemon.model'
import { Languages } from '../../configuration/languages'
import PokemonTypesService from '../../services/pokemon-types.service'

export function populateSpecies<T extends PokemonPreviewModel>(
    language: Languages
) {
    const pokemonSpeciesService = new PokemonSpeciesService(language)
    return async (pokemon: T): Promise<T> => {
        const species = await pokemonSpeciesService.get(pokemon.species.url)
        pokemon.name = species.names[0].name || pokemon.name
        pokemon.species = species
        return pokemon
    }
}

export function translateTypes<T extends PokemonPreviewModel>(
    language: Languages
) {
    const pokemonTypeService = new PokemonTypesService(language)
    return async (pokemon: T): Promise<T> => {
        const promises = pokemon.types.map(async (type: PokemonType) => {
            return await pokemonTypeService.get(type.url)
        })
        const translatedTypes = await Promise.all(promises)
        return { ...pokemon, types: translatedTypes }
    }
}
