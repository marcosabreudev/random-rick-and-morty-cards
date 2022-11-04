import { BrowserRouter, Routes, Route } from "react-router-dom"
import Welcome from "./interface/pages/Welcome"
import Board from './interface/pages/Board'
import { CardContextProvider } from "./interface/context/CardContext"

function App() {
  return (
    <CardContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/board" element={<Board />} />
        </Routes>
      </BrowserRouter>
    </CardContextProvider>
  )
}

export default App
