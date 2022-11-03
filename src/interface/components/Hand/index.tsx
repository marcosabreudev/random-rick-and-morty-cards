import { ICharacter } from '../../types/Character'
import Card from '../Card'
import './style.scss'

export default function Hand({ cards }: { cards: ICharacter[] }): JSX.Element {
  return (
    <div className="hand">
      {cards?.map((character) => (
        <Card key={character.id} data={character} />
      ))}
    </div>
  )
}
