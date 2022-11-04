import { useEffect, useState } from 'react'
import axios from 'axios'
import Deck from '../../components/Deck'
import Hand from '../../components/Hand'
import ShuffleButton from '../../components/ShuffleButton'
import { ICharacter } from '../../../types/Character'
import { RemoteGetCharacters } from '../../../data/usecases/get-characters/remote-get-characters'
import { AxiosHttpClient } from '../../../infra/http/axios-http-client'
import { GenerateRandomNumbers } from '../../../application/usecases/generate-random-numbers'
import { SetCharacterPoints } from '../../../application/usecases/set-character-points'
import { useCardContext } from '../../context/CardContext'
import './style.scss'

export default function Board() {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const cardContext = useCardContext()

  useEffect(() => {
    setIsLoading(true)

    const url = 'https://rickandmortyapi.com/api/character'
    const axiosHttpClient = new AxiosHttpClient()
    const remoteGetCharacters = new RemoteGetCharacters(url, axiosHttpClient)
    const ids = new GenerateRandomNumbers(5, 826).generate()

    remoteGetCharacters
      .get(ids)
      .then((results) => {
        const charactersWithPoints = results.body.map((character: ICharacter) =>
          new SetCharacterPoints(character, GenerateRandomNumbers).set(),
        )
        cardContext.setCards(charactersWithPoints)
        setIsLoading(false)
      })
      .catch((error) => {
        if (axios.isCancel(error))
          return console.error('axios error: ', error.message)
        console.error(error)
      })
  }, [])

  if (isLoading || !cardContext.cards) return <h1>Loading...</h1>

  return (
    <div className="board">
      <span>{cardContext.name}</span>
      <Deck />
      <ShuffleButton />
      <Hand />
    </div>
  )
}
