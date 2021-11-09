import React, { useState, useEffect } from 'react'
const url = 'https://api.github.com/users/QuincyLarson'
const MultipleReturns = () => {
  const [isLoading, setisLoading] = useState(true)
  const [isError, setisError] = useState(false)
  const [user, setUser] = useState('default users')
  useEffect(() => {
    fetch(url)
      .then((resp) => {
        if (resp.status >= 200 && resp.status <= 299) {
          return resp.json()
        } else {
          setisLoading(false)
          setisError(true)
          throw new Error(resp.statusText)
        }
      })
      .then((user) => {
        const { login } = user
        setUser(login)
        setisLoading(false)
      })
      .catch((error) => console.log('error'))
  }, [])

  if (isLoading) {
    return <h1>loading ...</h1>
  }
  if (isError) {
    return <h1>error..</h1>
  }
  return <h1>{user}</h1>
}

export default MultipleReturns
