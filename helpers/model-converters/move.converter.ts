import { Languages } from '../../configuration/languages'
import { MoveModel } from '../../models/move.model'
import { filterByLang } from '../filters.helper'

export function convertToMoveModel(language: Languages) {
    return (data: Record<string, any>): MoveModel => {
        const descriptions = filterByLang(language, data.effect_entries)
        return {
            url: data.url,
            id: data.id,
            names: filterByLang(language, data.names),
            type: data.type.name,
            description:
                descriptions.length > 0
                    ? descriptions[0].effect
                    : data.effect_entries[0].effect,
            pp: data.pp,
            power: data.power,
            accuracy: data.accuracy,
        }
    }
}
