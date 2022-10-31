import { ReactElement } from 'react'
import { ICard } from '../../types/Card'

import './style.scss'

export default function Card({ data }: { data: ICard }): ReactElement {
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
          <span>First seen in:</span>
          <p>Rickternal Friendshine of the Spotless Mort</p>
        </div>

        <div className="description__info">
          <span>Points:</span>
          <p className="description__points">25</p>
        </div>
      </section>
    </div>
  )
}
