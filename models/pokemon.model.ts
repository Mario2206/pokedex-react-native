import { POKE_TYPES } from '../style/color.style'
import { LanguageType } from './shared.model'
import { STATS } from '../configuration/pokemon'

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
    id: string
    names: Array<{ name: string; language: LanguageType }>
    flavor_text_entries: Array<{ flavor_text: string; language: LanguageType }>
    url: string
    evolutionChain?: { url: string }
}

export interface PokemonType {
    name: keyof typeof POKE_TYPES.COLORS
    url: string
    display_name: string
}

export interface PokemonStat {
    effort: number
    base_stat: number
    stat: { url: string; name: keyof typeof STATS }
}

export interface EvolutionChain {
    id: string
    species: PokemonSpecies
    evolutionDetails?: {
        minLevel: number
    }
}

export interface MoveModel {
    id: string
    url: string
    names: Array<{ name: string; language: LanguageType }>
    type: keyof typeof POKE_TYPES.COLORS
}

export interface PokemonMoves {
    move: MoveModel
    level: number
}

export interface PokemonModel {
    name: string
    id: number
    sprites: PokemonSprite
    types: PokemonType[]
    url: string
    species: PokemonSpecies
    stats?: PokemonStat[]
    evolutionChain?: { chain: EvolutionChain[]; url: string }
    moves: PokemonMoves[]
}
