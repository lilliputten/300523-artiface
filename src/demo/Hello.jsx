import React from 'react'

export const Hello = ({ greeting = 'Greeting', name = 'Name' }) => {
  return (
    <h1>{greeting}, {name}!</h1>
  )
}
