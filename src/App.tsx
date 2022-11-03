import { createContext, useContext, useState } from "react" 
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Welcome from "./pages/Welcome"
import Board from './pages/Board'
import { ICharacter } from "./types/Character"

export interface ICharacterContext {
  cards: ICharacter[] | undefined
  setCards: React.Dispatch<React.SetStateAction<ICharacter[] | undefined>>
  name: string
  setName: React.Dispatch<React.SetStateAction<string>>
}
export interface ICharacterContextProvider {
  children: JSX.Element
}
export const CharacterContext = createContext({} as ICharacterContext)
export const CharacterContextProvider = ({ children }: ICharacterContextProvider) => {
  const [cards, setCards] = useState<ICharacter[]>()
  const [name, setName] = useState<string>('')

  return (
    <CharacterContext.Provider value={{ cards, setCards, name, setName }}>
      {children}
    </CharacterContext.Provider>
  )
}
export const useCharacterContext = () => {
  const context = useContext(CharacterContext)
  return context
}

function App() {
  return (
    <CharacterContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/board" element={<Board />} />
        </Routes>
      </BrowserRouter>
    </CharacterContextProvider>
  )
}

export default App
