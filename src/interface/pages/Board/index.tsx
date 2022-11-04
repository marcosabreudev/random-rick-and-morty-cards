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
import { useCharacterContext } from '../../context/Character'
import './style.scss'

export default function Board() {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [cards, setCards] = useState<ICharacter[]>()
  const character = useCharacterContext()

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
        setCards(charactersWithPoints)
        setIsLoading(false)
      })
      .catch((error) => {
        if (axios.isCancel(error))
          return console.error('axios error: ', error.message)
        console.error(error)
      })
  }, [])

  if (isLoading || !cards) return <h1>Loading...</h1>

  return (
    <div className="board">
      <span>{character.name}</span>
      <Deck cards={cards} setCards={setCards} />
      <ShuffleButton cards={cards} setCards={setCards} />
      <Hand cards={cards} />
    </div>
  )
}
