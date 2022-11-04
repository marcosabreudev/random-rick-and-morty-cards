import { SetPoints } from '../../domain/usecases/set-points'
import { ICharacter } from '../../types/Character'
import { GenerateRandomNumbers } from './generate-random-numbers'

export class SetCharacterPoints implements SetPoints {
  constructor(
    private readonly character: ICharacter,
    private readonly randomNumberFunction: typeof GenerateRandomNumbers,
  ) {}

  set() {
    this.character.points = new this.randomNumberFunction(1, 10).generate()[0]
    return this.character
  }
}
