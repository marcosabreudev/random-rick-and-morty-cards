import { useNavigate } from "react-router-dom"
import { useCharacterContext } from "../../context/Character"

export default function Welcome(): JSX.Element {
  const navigate = useNavigate()
  const character = useCharacterContext()

  function navigateToBoard() {
    character.setName('Daniel')
    navigate("/board")
  }

  return (
    <>
      <h1>Welcome Page</h1>
      <button onClick={navigateToBoard}>Go to Board</button>
    </>
  )
}