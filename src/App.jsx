import { useState } from 'react'
import GalletSuerte from './components/GalletSuerte'
import './App.css'
import gallets from './beta/phrases.json'

function App() {
  const fond = [
    '/fondos/fondo1.jpg',
    '/fondos/fondo2.jpg',
    '/fondos/fondo3.jpg',
    '/fondos/fondo4.jpg',
  ]
  const [index, setIndex] = useState(0)
  const [fondo, setFondo] = useState(0)

  const suerte = () => {
    if (fondo < fond.length - 1) {
      setFondo(fondo + 1)
    } else {
      setFondo(0)
    }
    setIndex(Math.floor(Math.random() * gallets.length))
  }

  document.body.style = `background-image: url(${fond[fondo]})`

  return (
    <>
      <div className='contenedor__mayor'>
        <GalletSuerte data={gallets[index]} />
        <div className='conten__button'>
          <button className='botton' onClick={suerte}>
            siguiente ...
          </button>
        </div>
      </div>
    </>
  )
}

export default App

