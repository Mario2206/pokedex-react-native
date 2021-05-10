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

export interface PokemonModel {
    name: string
    id: number
    sprites: PokemonSprite
    types: string[]
}
