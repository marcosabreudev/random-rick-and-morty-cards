import { RandomNumbers } from '../../domain/usecases/random-numbers'

export class GenerateRandomNumbers implements RandomNumbers {
  constructor(
    private readonly quantity: number,
    private readonly range: number,
  ) {}

  generate(): number[] {
    const numbers: number[] = []
    for (let i = 0; i < this.quantity; i++) {
      numbers.push(Math.floor(Math.random() * this.range) + 1)
    }
    return numbers
  }
}
