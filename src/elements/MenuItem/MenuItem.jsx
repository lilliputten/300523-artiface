/** @module MenuItem
 *  @class MenuItem
 *  @since 2020.10.27, 03:05
 *  @changed 2021.02.20, 14:20
 */

import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
// import connect from 'react-redux/es/connect/connect';
import { cn } from 'utils/configure';
import config from 'config';
import { withActionsContext } from 'helpers/ActionsContext';

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
    hasIcon: PropTypes.bool,
    wrap: PropTypes.bool,
    // setNodeRef: PropTypes.func, // ??? use ref in parent component
  }

  // Lifecycle...

  constructor(props) {
    super(props);
    this.state = {};
    this.mounted = true;
    // if (props.setNodeRef) {
    //   props.setNodeRef(this);
    // }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  // Event handlers...

  onClick = (/* event */) => {
    const {
      id,
      val,
      onClick,
      actionsContextNode, // ActionsContext Provider
      disabled,
    } = this.props;
    if (!disabled) {
      // console.log('MenuItem:onClick', {
      //   id,
      //   val,
      //   onClick,
      //   actionsContextNode, // ActionsContext Provider
      //   disabled,
      // });
      // debugger;
      const hasOnClick = onClick && typeof onClick === 'function';
      const actionProps = {
        // ...event,
        id: id || val,
        val,
        component: this,
      };
      const result = hasOnClick ? onClick(actionProps) : undefined; // true;
      if (result !== false && actionsContextNode && typeof actionsContextNode.onAction === 'function') {
        Promise.resolve(result).then((result) => {
          if (result !== false) { // Check for non-false value
            actionsContextNode.onAction({ ...actionProps, result });
          }
        });
      }
      this.setState({ active: true });
      setTimeout(() => {
        if (this.mounted) {
          this.setState({ active: false });
        }
      }, config.css.transitionTime);
    }
  }

  // Helper methods...

  getClassName() {
    const {
      id,
      checkable,
      hasIcon,
      icon,
      checked,
      disabled,
      theme,
      wrap,
    } = this.props;
    const className = cnMenuItem({
      id,
      checkable,
      hasIcon: !!(hasIcon || icon || checkable),
      // hasIcon,
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
      hasIcon,
      checkable,
      checked,
      icon,
    } = this.props;
    if (((hasIcon || !checkable) && icon) || (checkable && checked)) {
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

export default compose(
  withActionsContext,
  FormItemHOC({ solid: true, hoverable: true, focusable: true }),
)(MenuItem);
