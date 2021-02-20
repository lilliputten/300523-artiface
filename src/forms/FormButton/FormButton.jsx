/** @module FormButton
 *  @class FormButton
 *  @since 2020.07.20, 19:07
 *  @changed 2021.02.19, 17:51
 */

import React from 'react';
import { compose } from 'redux';
import PropTypes from 'prop-types';
// import connect from 'react-redux/es/connect/connect';
import { cn } from 'utils/configure';
import { withActionsContext } from 'helpers/ActionsContext';
import config from 'config';

import FormItemHOC from '../FormItemHOC';

import InlineIcon from 'elements/InlineIcon';

import './FormButton.pcss';
import './FormButton-Variations.pcss';
import './FormButton-Themes.pcss';

const cnFormButton = cn('FormButton');

const defaultTag = 'button'; // 'div'; // `button` element is 'labelable', @see `https://stackoverflow.com/questions/54792126/html-label-with-for-div-id-to-focus-a-contenteditable-div-does-label-label`

class FormButton extends React.PureComponent /** @lends @FormButton.prototype */ {

  static propTypes = { // TODO!!!
    // TODO: size: PropTypes.string, // Different form item sizes? (eg: md -- default, sm, xs, lg, xl, xxl)
    checked: PropTypes.bool, // FormItem: Checked state
    disabled: PropTypes.bool,
    fullWidth: PropTypes.bool, // Occupies all horizontal space
    hasIcon: PropTypes.bool, // Optional
    hasText: PropTypes.bool, // Optional
    icon: PropTypes.oneOfType([ PropTypes.string, PropTypes.object ]), // Icon component. May be as image resource loaded with `file/url-loader` as `FontAwesomeIcon` component.
    id: PropTypes.string,
    inline: PropTypes.bool,
    largeIcon: PropTypes.bool, // Large icon
    onClick: PropTypes.func,
    onDark:  PropTypes.bool, // On dark background
    onlyIcon: PropTypes.bool, // Only icon
    plain: PropTypes.bool, // ??? Plain icon (no border & background -- if no style specified, looks as link)
    rightIcon: PropTypes.bool, // Icon placed at right side
    text: PropTypes.string, // Text content (may be passed as node children)
    theme: PropTypes.string, // Button style (plain, default, primary, secondary, error, warn, success, info, etc -- some are in progress -- see styles file)
    // setDomRef: PropTypes.func,
    // setNodeRef: PropTypes.func,
  }

  // Lifecycle...

  constructor(props) {
    super(props);
    this.state = {};
    this.mounted = true;
    if (props.setNodeRef) {
      props.setNodeRef(this);
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  // Helpers...

  hasIcon() {
    const { icon, hasIcon } = this.props;
    return !!(hasIcon || icon);
  }

  hasText() {
    const {
      hasText,
      onlyIcon,
      children,
      text,
    } = this.props;
    return !onlyIcon && !!(hasText || text || children);
  }

  getClassName() {
    // TODO: Refactor properties!
    const {
      // plain,
      checked,
      fullWidth,
      id,
      inline,
      largeIcon,
      onDark,
      onlyIcon,
      plain,
      rightIcon,
      rotatedIcon,
      theme,
      type,
      variation,
    } = this.props;
    const { active } = this.state;
    const mods = {
      // plain,
      checked,
      fullWidth,
      id,
      inline,
      largeIcon,
      onDark,
      onlyIcon,
      plain,
      rightIcon,
      rotatedIcon,
      theme,
      type,
      variation,
      // State..
      active,
    };
    const staticMods = {
      solid: true,
    };
    const classList = cnFormButton({
      ...staticMods,
      ...mods,
      hasIcon: this.hasIcon(),
      hasText: this.hasText(),
    }, [this.props.className]);
    return classList;
  }

  // Handlers...

  focus = () => {
    const { formItemNode } = this.props;
    // console.log('FormButton:focus');
    formItemNode && formItemNode.focus && formItemNode.focus();
  }
  blur = () => {
    const { formItemNode } = this.props;
    // console.log('FormButton:blur');
    formItemNode && formItemNode.blur && formItemNode.blur();
  }

  onClick = (/* event */) => {
    const {
      id,
      actionsContextNode, // ActionsContext Provider
      disabled,
      onClick,
      // clickable,
    } = this.props;
    if (!disabled) {
      const hasOnClick = onClick && typeof onClick === 'function';
      const actionProps = {
        // ...event,
        id,
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

  // Render...

  renderIcon() {
    const hasIcon = this.hasIcon();
    if (hasIcon) {
      const { icon } = this.props;
      if (icon && icon.type === InlineIcon) { // Already InlineIcon
        // Extend with updated `className` props
        const props = {
          ...icon.props,
          className: cnFormButton('Icon', [icon.props.className]),
        };
        const newIcon = { ...icon, props };
        return newIcon;
      }
      return (
        <InlineIcon icon={icon} className={cnFormButton('Icon')} />
      );
    }
  }

  renderText() {
    const hasText = this.hasText(); // !onlyIcon && !!(hasText || text || children
    if (hasText) {
      const { text, children } = this.props;
      return hasText && (
        <span className={cnFormButton('Text')}>
          {text || children}
        </span>
      );
    }
  }

  render() {

    const {
      id,
      inputId,
      disabled,
      tag,
      type,
      title,
      setDomRef, // From FormItemHOC
      // actionsContextNode,
    } = this.props;

    const iconElem = this.renderIcon(); // Icon element
    const textElem = this.renderText(); // Text element

    // const basicRenderProps = this.getRenderProps() // Get from props not from overrided `super`
    const renderProps = {
      // ...basicRenderProps,
      id: inputId || id,
      className: this.getClassName(),
      disabled,
      title,
      type,
      onClick: this.onClick,
      ref: setDomRef, // Init ref for FormItemHOC
      tabIndex: 0,
    };

    const content = (
      <React.Fragment>
        {iconElem}
        {textElem}
      </React.Fragment>
    );

    const tagName = tag || defaultTag;
    const element = React.createElement(tagName, renderProps, content);
    return element;
  }

}

// export default FormItemHOC({ solid: true, hoverable: true, framed: true })(FormButton)
export default compose(
  withActionsContext,
  FormItemHOC({ solid: true, hoverable: true, focusable: true, framed: true }),
)(FormButton);
