import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DictionaryAPI from './DictionaryAPI.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <DictionaryAPI />
    </>
  )
}

export default App
