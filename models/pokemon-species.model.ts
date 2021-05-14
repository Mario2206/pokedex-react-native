import { LanguageModel } from './language.model'

export interface PokemonSpecies {
    names: Array<{ name: string; language: LanguageModel }>
    flavor_text_entries: Array<{ flavor_text: string; language: LanguageModel }>
}
