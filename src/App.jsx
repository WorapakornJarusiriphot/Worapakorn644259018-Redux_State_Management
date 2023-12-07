import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Workout from './pages/Workouts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <h1>Workout Tracker</h1>
    <Workout/>
    </div>
  )
}

export default App
