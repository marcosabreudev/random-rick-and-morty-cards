import { BrowserRouter, Routes, Route } from "react-router-dom"
import Welcome from "./interface/pages/Welcome"
import Board from './interface/pages/Board'
import { CharacterContextProvider } from "./interface/context/Character"

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
