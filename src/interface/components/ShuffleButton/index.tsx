import { ShuffleCardsCharacters } from '../../../application/usecases/shuffle-cards-characters'
import { useCardContext } from '../../context/CardContext'
import './style.scss'

export default function ShuffleButton(): JSX.Element {
  const cardContext = useCardContext()

  function shuffleCards() {
    if (!cardContext.cards) return
    const toShuffle = new ShuffleCardsCharacters(cardContext.cards).shuffle()
    cardContext.setCards([...toShuffle])
  }

  return <button className='suffle-button' onClick={shuffleCards}>Embaralhar cartas</button>
}
