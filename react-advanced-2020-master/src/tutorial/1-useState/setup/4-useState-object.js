import React, { useState } from 'react'

const UseStateObject = () => {
  const [name, setName] = useState('peter')
  const [age, setAge] = useState(26)
  const [message, setMessage] = useState('random message')

  const changeMessage = () => {
    setMessage('hello world')
  }

  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <button className='btn' onClick={changeMessage}>
        ChangeMessage
      </button>
    </>
  )
}

export default UseStateObject
