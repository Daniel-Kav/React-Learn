import React from 'react'

const Person = () => {

    const person = {
        name: 'John',
        age: 34,
        nationality: 'Kenyan',
    }

    let person2 = new Proxy(person, {})
    console.log(person2)
  return (
    <div>
      
    </div>
  )
}

export default Person
