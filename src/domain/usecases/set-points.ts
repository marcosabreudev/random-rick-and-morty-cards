import { ICharacter } from '../../types/Character'

export interface SetPoints {
  set: (characters: ICharacter, randomNumberFunction: any) => ICharacter
}
