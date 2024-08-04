import React from 'react'

export const person = {
        name: 'John',
        age: 34,
        nationality: 'Kenyan',
    }

const Person = () => {

    

    let person2 = new Proxy(person, {})
    // console.log(person2)
  return (
    <div className='text-center '>
      person2 && person2.name && person2.age && person2.nationality
    </div>
  )
}

export default Person
