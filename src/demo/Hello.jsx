import React from 'react'
import { cn } from '@bem-react/classname'

import './Hello.pcss'

import Image from './img/LockColor2.svg'

const cnHello = cn('Hello')

export const Hello = ({ greeting = 'Greeting', name = 'Name' }) => {
  return (
    <div className={cnHello()}>
      <h1 className={cnHello('Title')}>{greeting}, {name}!</h1>
      <div className={cnHello('Image')}>
        <img src={Image} />
      </div>
    </div>
  )
}
