import { Languages } from '../configuration/languages'
import { SharedModel } from '../models/shared.model'

export function filterByLang(lang: Languages, data: any[]) {
    return data.filter((item) => item.language.name === lang)
}
