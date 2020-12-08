/** @module build
 *  @desc Library exportable ditributive
 *  @since 2020.05.19, 17:16
 *  @changed 2020.12.08, 21:47
 */

import config from 'config'
import { cn as bemReactCn } from '@bem-react/classname'

let configMap

const getConfigMap = () => {
  if (!configMap) {
    configMap = {}
    Object.keys(config).forEach(scopeId => {
      const scopeObj = config[scopeId]
      // const mapObj = configMap[scopeId] || (configMap[scopeId] = {})
      Object.keys(scopeObj).forEach((keyId => {
        if (configMap[keyId]) {
          configMap[keyId].push(scopeId)
          // const error = new Error('Duplicated config key "' + keyId + '" in scope "' + scopeId + '" and "' + configMap[keyId] + '"')
          // console.error(error) // eslint-disable-line no-console
          // debugger // eslint-disable-line no-debugger
          // throw error
        }
        else {
          configMap[keyId] = [scopeId]
        }
      }))
    })
  }
  return configMap
}

export const setConfigOptions = (options) => {
  const map = getConfigMap()
  Object.entries(options).map(([key, val]) => { // Set entry
    const scopes = map[key]
    scopes.map(scope => {
      const obj = config[scope]
      if (obj) {
        obj[key] = val
      }
    })
  })
}

export const cssMapping = (classNames) => {
  const { useCssModules, cssMappings } = config.app
  if (!useCssModules || !cssMappings || !Object.keys(cssMappings)) { // No css-module transforms
    return classNames
  }
  const classNamesList = (typeof classNames === 'string') ? classNames.split(' ').map(s => s.trim()) : classNames
  if (!Array.isArray(classNamesList)) {
    throw new Error('Class list must be an array!')
  }
  const resultList = classNamesList.map(className => {
    const result = cssMappings[className] || className
    // if (className !== result) {
    //   console.log('WebUiCore:utils:cssMapping', className, '->', result)
    //   debugger
    // }
    return result
  })
  return resultList.join(' ')
}

// Wrapper for `@bem-react/classname/cn()` function
// See original method call signatures & usage in `https://github.com/bem/bem-react/tree/master/packages/classname`
export const cn = (...args) => {
  let result = bemReactCn.apply(cn, args)
  if (typeof result === 'string') { // If class name, not fabric
    return cssMapping(result)
  }
  else if (typeof result === 'function') {
    return function cnCssMapping(...args) {
      let res = result.apply(null, args)
      if (typeof res === 'string') {
        res = cssMapping(res)
      }
      return res
    }
  }
  return result
}
