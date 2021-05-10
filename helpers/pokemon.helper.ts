import { POKE_TYPES } from '../style/color.style'

export function formatId(id: number, minLength: number) {
    const stringId = String(id)

    return stringId.length < minLength
        ? new Array(minLength - stringId.length).fill('0').join('') + stringId
        : stringId
}
