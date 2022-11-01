export interface GetCharacters {
  get: (ids: number[]) => Promise<any>
}
