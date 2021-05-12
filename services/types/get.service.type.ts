export interface GetServiceType<T> {
    getAll(offset?: number, limit?: number): Promise<T[]>
    get(id: string): Promise<T>
}
