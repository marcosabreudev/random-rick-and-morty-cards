import { ICharacter } from '../../../types/Character'
import { ShuffleCardsCharacters } from '../../../application/usecases/shuffle-cards-characters'

export default function ShuffleButton({
  cards,
  setCards,
}: {
  cards: ICharacter[]
  setCards: React.Dispatch<React.SetStateAction<ICharacter[] | undefined>>
}): JSX.Element {
  function shuffleCards() {
    const toShuffle = new ShuffleCardsCharacters(cards).shuffle()
    setCards([...toShuffle])
  }

  return <button onClick={shuffleCards}>Embaralhar cartas</button>
}
