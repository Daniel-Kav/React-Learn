import { useState } from 'react'
import './App.css'
import BlogList from './components/BlogList'
import { useEffect } from 'react'
import { Bars } from 'react-loader-spinner'

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
    }, 100)
  },[])
useEffect(() => {
    document.title = 'Blog Using React';
}, []);


  return (
    <>
    {/* <NavBar /> */}
    {isPending && <Bars
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="bars-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  />}
    {blogs && < BlogList blogs={blogs}/>}
    </>
  )
}

export default App
