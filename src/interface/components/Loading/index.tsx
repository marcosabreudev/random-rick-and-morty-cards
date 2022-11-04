import './style.scss'

export default function Loading(): JSX.Element {
  return (
    <div className='loading'>
      <div className="lds-grid"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  )
}