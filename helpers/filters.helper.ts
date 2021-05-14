import { Languages } from '../configuration/languages'
import { LanguageModel } from '../models/language.model'

export function filterByLang(lang: Languages, data: any[]) {
    return data.filter((item) => item.language.name === lang)
}
