/** @module MenuItem
 *  @class MenuItem
 *  @since 2020.10.27, 03:05
 *  @changed 2021.02.20, 14:20
 */

import React from 'react';
import PropTypes from 'prop-types';
// import connect from 'react-redux/es/connect/connect';
import { cn } from 'utils/configure';

import InlineIcon from 'elements/InlineIcon';

import FormItemHOC from 'forms/FormItemHOC';

import './MenuItem.pcss';

const cnMenuItem = cn('MenuItem');

class MenuItem extends React.PureComponent /** @lends @MenuItem.prototype */ {

  static propTypes = {
    checkable: PropTypes.bool,
    checked: PropTypes.bool,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    htmlId: PropTypes.string, // ???
    theme: PropTypes.string,
    icon: PropTypes.oneOfType([ PropTypes.string, PropTypes.object ]),
    id: PropTypes.string,
    onClick: PropTypes.func,
    setDomRef: PropTypes.func, // From FormItemHOC
    text: PropTypes.string,
    val: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
    withIcon: PropTypes.bool,
    wrap: PropTypes.bool,
  }

  // Lifecycle...

  // Event handlers...

  onClick = (ev) => {
    const { id, val, onClick } = this.props;
    if (typeof onClick === 'function') {
      onClick({ ...ev, id, val, component: this });
    }
  }

  // Helper methods...

  getClassName() {
    const {
      id,
      checkable,
      withIcon,
      // icon,
      checked,
      disabled,
      theme,
      wrap,
    } = this.props;
    const className = cnMenuItem({
      id,
      checkable,
      // withIcon: !!(withIcon || icon),
      withIcon,
      checked,
      disabled,
      theme,
      wrap,
    }, [this.props.className]);
    return className;
  }

  // Render...

  renderIconContent() {
    const {
      withIcon,
      checkable,
      checked,
      icon,
    } = this.props;
    if (( withIcon && icon) || (checkable && checked)) {
      const iconContent = icon || 'faCheck';
      return iconContent && <InlineIcon icon={iconContent} className={cnMenuItem('Icon')} />;
    }
  }

  renderTextContent() {
    const {
      children,
      text,
    } = this.props;
    return (
      <div className={cnMenuItem('Text')}>
        {children || text}
      </div>
    );
  }

  render() {

    const {
      htmlId,
      setDomRef, // From FormItemHOC
    } = this.props;

    const renderProps = {
      // id,
      id: htmlId,
      className: this.getClassName(),
      onClick: this.onClick,
      ref: setDomRef, // Init ref for FormItemHOC
    };

    const iconContent = this.renderIconContent();
    const textContent = this.renderTextContent();

    // console.log('MenuItem:render', val)

    return (
      <div {...renderProps}>
        {iconContent}
        {textContent}
      </div>
    );
  }

}

export default FormItemHOC({ solid: true, hoverable: true })(MenuItem);
