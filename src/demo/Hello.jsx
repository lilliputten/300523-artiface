// Hello.jsx
import React from 'react'

export function Hello({ greeting='Greeting', name='Name' }) {
  return <h1>{greeting}, {name}!</h1>
}
