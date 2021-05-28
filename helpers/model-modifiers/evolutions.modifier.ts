import { EvolutionChain } from '../../models/pokemon.model'
import { Languages } from '../../configuration/languages'
import PokemonSpeciesService from '../../services/pokemon-species.service'

export function populateSpecies<T extends EvolutionChain>(language: Languages) {
    const pokemonSpeciesService = new PokemonSpeciesService(language)
    return async (chain: T[]): Promise<T[]> => {
        return await Promise.all(
            chain.map(async (item) => {
                item.species = {
                    ...(await pokemonSpeciesService.get(item.species.url)),
                    flavor_text_entries: [],
                }
                return item
            })
        )
    }
}
