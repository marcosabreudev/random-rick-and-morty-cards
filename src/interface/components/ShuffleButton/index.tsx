import { ICharacter } from '../../../types/Character'
import { ShuffleCardsCharacters } from '../../../application/usecases/shuffle-cards-characters'
import { useCardContext } from '../../context/CardContext'

export default function ShuffleButton(): JSX.Element {
  const cardContext = useCardContext()

  function shuffleCards() {
    if (!cardContext.cards) return
    const toShuffle = new ShuffleCardsCharacters(cardContext.cards).shuffle()
    cardContext.setCards([...toShuffle])
  }

  return <button onClick={shuffleCards}>Embaralhar cartas</button>
}
