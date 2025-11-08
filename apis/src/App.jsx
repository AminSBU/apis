import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BucketListAPI from './BucketList.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BucketListAPI />
    </>
  )
}

export default App
