import { SetPoints } from '../../domain/usecases/set-points'
import { ICharacter } from '../../types/Character'

export class SetCharacterPoints implements SetPoints {
  constructor(
    private readonly character: ICharacter,
    private readonly randomNumberFunction: any,
  ) {}

  set() {
    this.character.points = new this.randomNumberFunction(1, 10).generate()[0]
    return this.character
  }
}
