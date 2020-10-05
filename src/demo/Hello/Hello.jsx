/** @module Hello
 *  @since 2020.07.20, 19:07
 *  @changed 2020.07.20, 19:07
 */

import React from 'react'
import { cn } from '@bem-react/classname'
// import config from 'config'

import './Hello.pcss'

import Image from './img/LockColor2.svg'

const cnHello = cn('Hello')

const Hello = ({ greeting = 'Greeting', name = 'Name' }) => {
  return (
    <div className={cnHello()}>
      <h1 className={cnHello('Title')}>{greeting}, {name}!</h1>
      <div className={cnHello('Image')}>
        <img src={Image} />
      </div>
    </div>
  )
}

export default Hello
