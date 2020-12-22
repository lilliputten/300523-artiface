import React from 'react'
import { useState, useEffect } from 'react'

function useDelayUnmount(isMounted: boolean, delayTime: number) {
  const [ shouldRender, setShouldRender ] = useState(false)

  useEffect(() => {
    let timeoutId: number
    if (isMounted && !shouldRender) {
      setShouldRender(true)
    }
    else if (!isMounted && shouldRender) {
      timeoutId = setTimeout(
        () => setShouldRender(false),
        delayTime
      )
    }
    return () => clearTimeout(timeoutId)
  }, [isMounted, delayTime, shouldRender])
  return shouldRender
}

// Usage:

const Parent = () => {
  const [ isMounted, setIsMounted ] = useState(true)
  const shouldRenderChild = useDelayUnmount(isMounted, 500)
  const mountedStyle = { opacity: 1, transition: 'opacity 500ms ease-in' }
  const unmountedStyle = { opacity: 0, transition: 'opacity 500ms ease-in' }

  const handleToggleClicked = () => {
    setIsMounted(!isMounted)
  }

  return (
    <div>
      {shouldRenderChild &&
                <div style={isMounted ? mountedStyle : unmountedStyle} />}
      <button type="submit" onClick={handleToggleClicked}>Click me!</button>
    </div>
  )
}

console.log(Parent)
