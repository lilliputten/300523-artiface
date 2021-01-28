/** @module MenuItem
 *  @class MenuItem
 *  @since 2020.10.27, 03:05
 *  @changed 2020.10.27, 03:06
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
    icon: PropTypes.oneOfType([ PropTypes.string, PropTypes.object ]),
    id: PropTypes.string,
    onClick: PropTypes.func,
    setDomRef: PropTypes.func, // From FormItemHOC
    text: PropTypes.string,
    val: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
    withIcon: PropTypes.bool,
  }

  // Event handlers...

  onClick = () => {
    const { id, val, onClick } = this.props;
    if (typeof onClick === 'function') {
      onClick({ id, val, component: this });
    }
  }

  // Helper methods...

  getClassName() {
    const {
      id,
      checkable,
      withIcon,
      checked,
      disabled,
      // title,
      // onClick,
    } = this.props;
    const className = cnMenuItem({
      id,
      checkable,
      withIcon,
      checked,
      disabled,
    }, [this.props.className]);
    // console.log('MenuItem:constructor', this.props);
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
    if ((withIcon && icon) || (checkable && checked)) {
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
