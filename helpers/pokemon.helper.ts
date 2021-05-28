import { Image } from 'react-native'

export function formatId(id: number, minLength: number) {
    const stringId = String(id)

    return stringId.length < minLength
        ? new Array(minLength - stringId.length).fill('0').join('') + stringId
        : stringId
}

export function fetchImage(pokemonId: string | number) {
    return `https://pokeres.bastionbot.org/images/pokemon/${pokemonId}.png`
}
