import { Languages } from '../configuration/languages'

export function filterByLang(lang: Languages, data: any[]) {
    return data.filter((item) => item.language.name === lang)
}
