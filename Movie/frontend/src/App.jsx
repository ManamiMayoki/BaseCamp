import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <p>Hello world!</p>
      </div>
      <Text display="Hello, React!" />
      <Text display="Welcome to Vite!" />
    </>
  )
}

//image
//name of the movie
//release date
//favorite button

function Text({display}){
  return (
    <div>
      <p>{display}</p>
    </div>
  )
}

export default App
