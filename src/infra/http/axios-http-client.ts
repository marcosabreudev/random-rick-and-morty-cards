import axios, { AxiosResponse } from 'axios'

import { HttpClient } from '../../data/protocols/http/http-client'

export class AxiosHttpClient implements HttpClient<any> {
  async get(url: string): Promise<any> {
    const axiosSource = axios.CancelToken.source()
    let axiosResponse: AxiosResponse

    try {
      axiosResponse = await axios.get(url, {
        cancelToken: axiosSource.token,
      })
    } catch (error) {
      return console.log(error)
    }

    return {
      statusCode: axiosResponse.status,
      source: axiosResponse.config.cancelToken,
      body: axiosResponse.data,
    }
  }
}
