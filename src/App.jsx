

import {useState} from 'react'
import GalletSuerte from './components/GalletSuerte'
import './App.css'
import gallets from './beta/phrases.json'

function App() {
  const fond = ['/fondos/fondo1.jpg', '/fondos/fondo2.jpg', '/fondos/fondo3.jpg', '/fondos/fondo4.jpg']
  const [index, useIndex] = useState (0)
  const [fondo, usefondo]= useState (0)

  const suerte = () => {
    if (fondo < fond.length -1) {
      usefondo(fondo + 1)
    }else{
      usefondo(0)
    }
    
    useIndex(Math.floor(Math.random()*gallets.length))
  }
  document.body.style= `background-image: url(${fond[fondo]})`
  return (
    <>
     <GalletSuerte 
     beta={gallets[index]}/>
     <div>
      <button onClick= {suerte}>ver suerte</button>
     </div>
     
    </>
  )
}

export default App



