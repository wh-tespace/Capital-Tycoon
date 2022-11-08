import { useState } from 'react'
import './App.css'
import BotComList from './components/BotComList/BotComList';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BotComList />
    </div>
  )
}

export default App
