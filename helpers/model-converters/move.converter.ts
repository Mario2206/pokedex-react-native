import { Languages } from '../../configuration/languages'
import { MoveModel } from '../../models/move.model'
import { filterByLang } from '../filters.helper'

export function convertToMoveModel(data: Record<string, any>): MoveModel {
    const descriptions = filterByLang(Languages.FR, data.effect_entries)
    return {
        url: data.url,
        id: data.id,
        names: filterByLang(Languages.FR, data.names),
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
