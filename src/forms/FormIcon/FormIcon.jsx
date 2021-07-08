/** @module FormIcon
 *  @class FormIcon
 *  @since 2021.07.08, 15:20
 *  @changed 2021.07.08, 15:20
 */

import React from 'react';
import { compose } from 'redux';
import PropTypes from 'prop-types';
// import connect from 'react-redux/es/connect/connect';
import { cn } from 'utils/configure';
// import config from 'config';

import FormItemHOC from '../FormItemHOC';

import InlineIcon from 'elements/InlineIcon';

import './FormIcon.pcss';

const cnFormIcon = cn('FormIcon');

const defaultTag = 'div'; // `button` element is 'labelable', @see `https://stackoverflow.com/questions/54792126/html-label-with-for-div-id-to-focus-a-contenteditable-div-does-label-label`

class FormIcon extends React.PureComponent /** @lends @FormIcon.prototype */ {

  static propTypes = {
    icon: PropTypes.oneOfType([ PropTypes.string, PropTypes.object ]), // Icon component. May be as image resource loaded with `file/url-loader` as `FontAwesomeIcon` component.
    id: PropTypes.string,
    title: PropTypes.string,
    inline: PropTypes.bool,
    disabled: PropTypes.bool,
    plain: PropTypes.bool, // Is it used???
    onDark: PropTypes.bool, // Is it used???
    largeIcon: PropTypes.bool, // Large icon Is it used???
    theme: PropTypes.string, // Button style (plain, default, primary, secondary, error, warn, success, info, etc -- some are in progress -- see styles file)
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  }

  // Lifecycle...

  // Helpers...

  getClassName() {
    // TODO: Refactor properties!
    const {
      id,
      inline,
      disabled,
      plain, // ???
      largeIcon, // ???
      onDark, // ???
      theme,
    } = this.props;
    const mods = {
      id,
      inline,
      disabled,
      plain, // ???
      largeIcon, // ???
      onDark, // ???
      theme,
    };
    const staticMods = {
      solid: true,
    };
    const classList = cnFormIcon({
      ...staticMods,
      ...mods,
    }, [this.props.className]);
    return classList;
  }

  // Render...

  renderIcon() {
    const {
      icon,
      theme,
      plain, // ???
      onDark, // ???
      largeIcon, // ???
    } = this.props;
    if (icon && icon.type === InlineIcon) { // Already InlineIcon
      // Extend with updated `className` props
      const props = {
        ...icon.props,
        className: cnFormIcon('Icon', [icon.props.className]),
        theme,
        plain,
        onDark,
        largeIcon,
      };
      const newIcon = { ...icon, props };
      return newIcon;
    }
    return (
      <InlineIcon
        icon={icon}
        theme={theme}
        plain={plain}
        onDark={onDark}
        largeIcon={largeIcon}
        className={cnFormIcon('Icon')}
      />
    );
  }

  render() {

    const {
      id,
      title,
      disabled,
      tag,
      setDomRef, // From FormItemHOC
      style,
    } = this.props;

    const content = this.renderIcon(); // Icon element

    // const basicRenderProps = this.getRenderProps() // Get from props not from overrided `super`
    const renderProps = {
      // ...basicRenderProps,
      id,
      className: this.getClassName(),
      disabled,
      ref: setDomRef, // Init ref for FormItemHOC
      tabIndex: 0,
      title,
      style,
    };

    const tagName = tag || defaultTag;
    const element = React.createElement(tagName, renderProps, content);
    return element;
  }

}

export default compose(
  FormItemHOC({ solid: true /* , hoverable: true, focusable: true, framed: true */ }),
)(FormIcon);
