import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { LotteryProvider } from './contexts/LotteryContext'
import Megasena from './pages/Megasena'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LotteryProvider>
        <Megasena />
      </LotteryProvider>
    </>
  )
}

export default App
