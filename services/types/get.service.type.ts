import { Languages } from '../../configuration/languages'

export interface GetServiceType<T> {
    language: Languages

    getAll(offset?: number, limit?: number): Promise<T[]>

    get(id: string): Promise<T>
}
