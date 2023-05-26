import { useState } from 'react'
import './App.css'
import Hola from './components/Hola'

function App() {
  const [nuevoTexto, setNuevoTexto] = useState("")

  const mostrar = ()=>{
    setNuevoTexto(" (from changed state)")
  }
  const myFriend = 'my friend'

  return (
    <>
    <Hola texto={myFriend + nuevoTexto}></Hola>
    <button onClick={mostrar} >Mostrar Texto</button>
    </>
  )
}

export default App
