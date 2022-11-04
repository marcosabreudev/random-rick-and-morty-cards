import { useCardContext } from '../../context/CardContext'
import Card from '../Card'
import './style.scss'

export default function Hand(): JSX.Element {
  const cardContext = useCardContext()

  return (
    <div className="hand">
      {cardContext.cards?.map((character) => (
        <Card key={character.id} data={character} />
      ))}
    </div>
  )
}
