import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const incrementar = ()=>{
    setCount(count + 1)
  }

  return (
    <>
    <p>{count}</p>
    <button onClick={incrementar} >Incrementar</button>
    </>
  )
}

export default App
