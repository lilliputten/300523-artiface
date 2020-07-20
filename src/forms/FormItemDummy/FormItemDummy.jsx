/** @module FormItemDummy
 *  @class FormItemDummy
 *  @desc Demo form item
 *  @since 2020.07.20, 19:07
 *  @changed 2020.07.20, 19:07
 */

import React from 'react'
// import connect from 'react-redux/es/connect/connect'
import { cn } from '@bem-react/classname'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// import FormItem from '../FormItem' // UNUSED: Should be implemented as wrapper in composition setup

import './FormItemDummy.pcss'

const cnFormItemDummy = cn('FormItemDummy')

class FormItemDummy extends React.Component /** @lends @FormItemDummy.prototype */ {

  constructor(props) {
    super(props)
    // const {
    //   hoverable,
    //   clickable,
    //   checked,
    // } = props
    this.state = {
      // // FormItem states...
      // solid: true,
      // hoverable: (hoverable != null) ? hoverable : true,
      // clickable: (clickable != null) ? clickable : true,
      // checked,
      // framed: true,
    }
  }

  /* UNUSED: getDerivedStateFromProps
   * static getDerivedStateFromProps(props[> , state <]) { // ???
   *   const {
   *     plain,
   *     style,
   *     hasIcon,
   *     hasText,
   *     onlyIcon,
   *     text,
   *     icon,
   *     children,
   *     hoverable,
   *     clickable,
   *     checked,
   *   } = props
   *   const isPlain = !!(plain || style === 'plain')
   *   return {
   *     hoverable: (hoverable != null) ? hoverable : true,
   *     clickable: (clickable != null) ? clickable : true,
   *     checked,
   *     hasIcon: !!(hasIcon || icon),
   *     hasText: !onlyIcon && !!(hasText || text || children),
   *     plain: isPlain,
   *     framed: !isPlain,
   *   }
   * }
   */

  getClassName() {
    // TODO: Refactor properties!
    const {
      id,
      onlyIcon,
      largeIcon,
      rightIcon,
      style,
      fullWidth,
      checked,
      type,
      plain,
      hasIcon,
      hasText,
    } = this.props
    const classList = cnFormItemDummy({
        id,
        style,
        fullWidth,
        checked,
        plain,
        hasIcon,
        hasText,
        onlyIcon,
        largeIcon,
        rightIcon,
        type,
    }, [this.props.className])
    return classList
  }

  // Handlers...

  onClick = (event) => {
    const {
      disabled,
      onClick,
      clickable,
    } = this.props
    if (clickable && !disabled && onClick && typeof onClick === 'function') {
      onClick(event)
    }
  }

  // Render...

  render() {

    const {
      // id,
      // name,
      children,
      text,
      tag,
      type,
      title,
      // hasIcon,
      // hasText,
      // icon,
      // onClick,
    } = this.props

    /* // UNUSED: icon & text
     * const iconElem = hasIcon && (
     *   <span key="Icon" className={cnFormItemDummy('Icon')}>
     *     <FontAwesomeIcon className={cnFormItemDummy('IconImg')} icon={icon} />
     *   </span>
     * )
     * const textElem = hasText && (
     *   <span key="Text" className={cnFormItemDummy('Text')}>
     *     {text || children}
     *   </span>
     * )
     */

    // const basicRenderProps = this.getRenderProps() // Get from props not from overrided `super`
    const renderProps = {
      // ...basicRenderProps,
      title,
      type,
      onClick: this.onClick,
    }

    const content = children || text

    const tagName = tag || 'div'
    const element = React.createElement(tagName, renderProps, content) // [ iconElem, textElem ])
    return element
  }

}

export default FormItemDummy
