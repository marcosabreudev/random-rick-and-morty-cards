import { GetCharacters } from '../../../domain/usecases/get-characters'
import { HttpClient } from '../../protocols/http/http-client'

export class RemoteGetCharacters implements GetCharacters {
  constructor(
    private readonly url: string,
    private readonly HttpClient: HttpClient<any>,
  ) {}

  async get(ids: number[]): Promise<any> {
    const response = await this.HttpClient.get(`${this.url}/${ids}`)
    return response
  }
}
