import { ICharacter } from '../../../types/Character'

import './style.scss'

export default function Card({ data }: { data: ICharacter }): JSX.Element {
  return (
    <div className="card">
      <img src={data.image} />

      <section className="description">
        <div className="description__info">
          <h2>{data.name}</h2>
          <span className="description__status">
            {data.status} - {data.species}
          </span>
        </div>

        <div className="description__info">
          <span>Last known location:</span>
          <p>{data.location.name}</p>
        </div>

        <div className="description__info">
          <span>Points:</span>
          <p className="description__points">{data.points}</p>
        </div>
      </section>
    </div>
  )
}