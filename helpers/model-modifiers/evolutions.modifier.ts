import { EvolutionChain, PokemonModel } from '../../models/pokemon.model'
import PokemonSpeciesService from '../../services/pokemon-species.service'

export async function populateSpecies(
    chain: EvolutionChain[]
): Promise<EvolutionChain[]> {
    return await Promise.all(
        chain.map(async (item) => {
            item.species = {
                ...(await PokemonSpeciesService.get(item.species.url)),
                flavor_text_entries: [],
            }
            return item
        })
    )
}
