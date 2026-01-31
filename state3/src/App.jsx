import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from './Profile'
import TodoList from './TodoList'
import Shop from './Shop'

function App() {
  return (
    <>
      <Profile/>
      <TodoList/>
      <Shop/>
    </>
  )
}

export default App
