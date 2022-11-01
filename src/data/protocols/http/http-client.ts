export interface HttpClient<R> {
  get(url: string): Promise<R>
}
