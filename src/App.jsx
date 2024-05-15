import { useState } from 'react'
import './App.css'
import TopHeader from './Components/Header/TopHeader'
import LowerHeader from './Components/Header/LowerHeader'

function App () {
  const [count, setCount] = useState(0)

  return (
    <>
        <TopHeader />
        <LowerHeader />
    </>
  )
}

export default App
