import { POKE_TYPES } from '../style/color.style'

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

export interface PokemonPreviewModel {
    name: string
    id: number
    sprites: PokemonSprite
    types: Array<keyof typeof POKE_TYPES.COLORS>
    url: string
}

export interface PokemonModel extends PokemonPreviewModel {
    description?: string
}
