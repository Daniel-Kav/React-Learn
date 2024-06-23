import { useState } from 'react'
import './App.css'
import BlogList from './components/BlogList'
import { useEffect } from 'react'

function App() {
  const [blogs , setBlogs] = useState(null)

  useEffect(()=> {
    fetch('http://localhost:8000/blogs')
    .then(res => {
      return res.json();
    })
    .then( data => setBlogs(data) )
    .catch(err => console.log(err) );
  },[])

  return (
    <>
    {/* <NavBar /> */}
    {blogs && < BlogList blogs={blogs}/>}
    </>
  )
}

export default App
