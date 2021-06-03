import { LanguageType } from './shared.model'
import { POKE_TYPES } from '../style/color.style'

export interface MoveModel {
    id: string
    url: string
    names: Array<{ name: string; language: LanguageType }>
    type: keyof typeof POKE_TYPES.COLORS
    accuracy: number
    power: number
    pp: number
    description: string
}
