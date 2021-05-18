import { POKE_TYPES } from '../style/color.style'
import { LanguageType } from './shared.model'

export interface PokemonSprite {
    back_female: string
    back_shiny_female: string
    back_default: string
    front_female: string
    front_shiny_female: string
    back_shiny: string
    front_default: string
    front_shiny: string
}

export interface PokemonSpecies {
    names: Array<{ name: string; language: LanguageType }>
    flavor_text_entries: Array<{ flavor_text: string; language: LanguageType }>
    url: string
}

export interface PokemonType {
    name: keyof typeof POKE_TYPES.COLORS
    url: string
    display_name: string
}

export interface PokemonStat {
    effort: number
    base_stat: number
    stat: { url: string; name: string }
}

export interface PokemonPreviewModel {
    name: string
    id: number
    sprites: PokemonSprite
    types: PokemonType[]
    url: string
    species: PokemonSpecies
}

export interface PokemonModel extends PokemonPreviewModel {
    stats: PokemonStat
}
