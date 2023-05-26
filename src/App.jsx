import { useState } from 'react'
import './App.css'
import Hola from './components/Hola'

function App() {
  const [count, setCount] = useState("")

  const incrementar = ()=>{
    setCount("from changed state!")
  }
  const myFriend = 'my friend'

  return (
    <>
    <Hola texto={myFriend}></Hola>
    <button onClick={incrementar} >Incrementar</button>
    </>
  )
}

export default App
