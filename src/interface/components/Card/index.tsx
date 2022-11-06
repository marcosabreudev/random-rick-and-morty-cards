import { ICharacter } from '../../../types/Character'

import './style.scss'

export default function Card({ data }: { data: ICharacter }): JSX.Element {
  return (
    <div className="card">
      <div className='card__header'>
        <img src={data.image} alt={data.name} />
        <span className="card__points">{data.points}</span>
      </div>

      <section className="description">
        <div className="description__info">
          <h2>{data.name}</h2>
          <span className="description__status">
            {data.status} - {data.species}
          </span>
        </div>

        <div className="description__info">
          <span className='description__label'>Last known location:</span>
          <p>{data.location.name}</p>
        </div>
      </section>
    </div>
  )
}
