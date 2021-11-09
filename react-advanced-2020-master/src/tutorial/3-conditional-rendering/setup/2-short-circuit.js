import React, { useState } from 'react'
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';
  const [text, setText] = useState('')
  const [error, setError] = useState(false)
  return (
    <>
      <h1>{text || 'ritish jaiswal'}</h1>
      <button
        className='btn'
        onClick={() => {
          setError(!error)
        }}
      >
        Toggle error
      </button>
      {error && <h1>Error...</h1>}
      {error ? <p>this is error</p> : <p>there is no error</p>};
    </>
  )
}

export default ShortCircuit
