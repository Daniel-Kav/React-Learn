import { useState } from 'react'
import './App.css'
import BlogList from './components/BlogList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar />
    < BlogList blogs={blog}/>
    </>
  )
}

export default App
