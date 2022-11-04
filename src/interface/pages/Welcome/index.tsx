import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '../../components/Logo'
import { useCardContext } from '../../context/CardContext'
import './style.scss'

export default function Welcome(): JSX.Element {
  const navigate = useNavigate()
  const cardContext = useCardContext()

  return (
    <div className="welcome">
      <div className='welcome__logo'>
        <Logo />
      </div>

      <div className='welcome__form'>
        <input 
          className='welcome__input-name'
          type='text'
          placeholder='Insira seu nome'
          value={cardContext.name}
          onChange={(event) => cardContext.setName(event.target.value)}
          autoFocus
        />
        <button
          className='welcome__button' 
          onClick={() => navigate("/board")}
          disabled={cardContext.name.length < 3 ? true : false}
        >
          Acessar Cartas
        </button>
      </div>
    </div>
  )
}