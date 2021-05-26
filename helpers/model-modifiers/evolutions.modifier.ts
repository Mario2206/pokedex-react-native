import { PokemonPreviewModel } from '../../models/pokemon.model'
import { Languages } from '../../configuration/languages'

export function addEvolutionChain<T extends PokemonPreviewModel>(
    language: Languages
) {
    return (data: Record<string, any>) => {}
}
