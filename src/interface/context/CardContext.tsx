import { createContext, useContext, useState } from "react" 
import { ICharacter } from "../../types/Character"

export interface ICardContext {
  cards: ICharacter[] | undefined
  setCards: React.Dispatch<React.SetStateAction<ICharacter[] | undefined>>
  name: string
  setName: React.Dispatch<React.SetStateAction<string>>
}
export interface ICardContextProvider {
  children: JSX.Element
}
export const CardContext = createContext({} as ICardContext)
export const CardContextProvider = ({ children }: ICardContextProvider) => {
  const [cards, setCards] = useState<ICharacter[]>()
  const [name, setName] = useState<string>('')

  return (
    <CardContext.Provider value={{ cards, setCards, name, setName }}>
      {children}
    </CardContext.Provider>
  )
}
export const useCardContext = () => {
  const context = useContext(CardContext)
  return context
}