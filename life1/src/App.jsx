import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LifecycleComponent from './Lifecycle'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <LifecycleComponent/>
    </>
  )
}

export default App
