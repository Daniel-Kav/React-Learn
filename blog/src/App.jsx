import { useState } from 'react'
import './App.css'
import BlogList from './components/BlogList'
import { useEffect } from 'react'

function App() {
  const [blogs , setBlogs] = useState(null)
  const [isPending, setisPending] = useState(true)

  useEffect(()=> {
    setTimeout(()=>{
      fetch('http://localhost:8000/blogs')
    .then(res => {
      return res.json();
    })
  .then( data => {
    setBlogs(data)
    setisPending(false)
  })
    .catch(err => console.log(err) );
    }, 1000)
  },[])
useEffect(() => {
    document.title = 'Blog Using React';
}, []);


  return (
    <>
    {/* <NavBar /> */}
    {isPending && <div>Loading ...</div>}
    {blogs && < BlogList blogs={blogs}/>}
    </>
  )
}

export default App
