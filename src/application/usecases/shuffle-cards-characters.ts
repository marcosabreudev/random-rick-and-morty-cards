import Lodash from 'lodash'
import { ICharacter } from '../../types/Character'
import { ShuffleCards } from '../../domain/usecases/shuffle-cards'

export class ShuffleCardsCharacters implements ShuffleCards {
  constructor(private readonly cards: ICharacter[]) {}

  shuffle(): ICharacter[] {
    return Lodash.shuffle(this.cards)
  }
}
