import { ICharacter } from '../../../types/Character'
import { GenerateRandomNumbers } from '../../../application/usecases/generate-random-numbers'
import { RemoteGetCharacters } from '../../../data/usecases/get-characters/remote-get-characters'
import { AxiosHttpClient } from '../../../infra/http/axios-http-client'
import { SetCharacterPoints } from '../../../application/usecases/set-character-points'
import { HandCardLimit } from '../../../application/usecases/hand-card-limit'
import { useCardContext } from '../../context/CardContext'
import Logo from '../Logo'
import './style.scss'

function verifyIfAlreadyHasTheNewCharacter(
  randomId: number,
  cards: ICharacter[] | undefined,
) {
  const has = cards?.some((character) => character.id === randomId)
  if (has) return true
  return false
}

export default function Deck(): JSX.Element {
  const cardContext = useCardContext()

  function addCard() {
    const limit = new HandCardLimit().limit
    if (cardContext.cards?.length === limit) return alert('Você atingiu o limite de cartas!')

    let randomId = new GenerateRandomNumbers(1, 826).generate()
    if (verifyIfAlreadyHasTheNewCharacter(randomId[0], cardContext.cards)) return

    const url = 'https://rickandmortyapi.com/api/character'
    const axiosHttpClient = new AxiosHttpClient()
    const remoteGetCharacters = new RemoteGetCharacters(url, axiosHttpClient)
    remoteGetCharacters.get(randomId).then((results) => {
      const newCharactersWithPoints = new SetCharacterPoints(
        results.body,
        GenerateRandomNumbers,
      ).set()

      if (cardContext.cards) cardContext.setCards([newCharactersWithPoints, ...cardContext.cards])
    })
  }

  return (
    <div className="deck-container">
      <section className="deck" onClick={addCard}>
        <div className="deck__logo">
          <Logo />
        </div>
      </section>
    </div>
  )
}
