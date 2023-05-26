import { useState } from 'react'
import './App.css'
import hola from './components/holaMundo'

function App() {
  const [texto, setTexto] = useState("")

  const mostrarTexto = ()=>{
    setTexto("from changed state!")
    const texto = 'My Friend!'
  }

  return (
    <>
    <holaMundo text={texto} />
    <button onClick={mostrarTexto} >Mostrar texto</button>
    </>
  )
}

export default App
