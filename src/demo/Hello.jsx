import React from 'react'
import { cn } from '@bem-react/classname'

import './Hello.pcss'

import Image from './img/LockColor2.svg'

const cnHello = cn('Hello')

/*DEBUG: Test one-string debug */ console.log('One-string debug output')

/*DEBUG-BEGIN: Test multiline debug */
console.log('Multiline debug output')
debugger
/*DEBUG-END*/

/*NO-DEBUG console.log('No-debug output'); */

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
