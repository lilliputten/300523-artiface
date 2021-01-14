/** @module InlineIcon
 *  @class InlineIcon
 *  @since 2020.10.07, 02:08
 *  @changed 2020.12.24, 04:06
 */

import React from 'react';
import PropTypes from 'prop-types';
// import connect from 'react-redux/es/connect/connect'
import { cn } from 'utils/configure';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as solidIcons from '@fortawesome/free-solid-svg-icons';
import * as regularIcons from '@fortawesome/free-regular-svg-icons';

const iconGroups = {
  solid: solidIcons,
  regular: regularIcons,
};

import './InlineIcon.pcss';

const cnInlineIcon = cn('InlineIcon');

class InlineIcon extends React.PureComponent /** @lends @InlineIcon.prototype */ {

  static propTypes = {
    id: PropTypes.string,
    theme: PropTypes.string,
    tag: PropTypes.string,
    title: PropTypes.string,
    icon: PropTypes.oneOfType([ PropTypes.string, PropTypes.object ]),
    onClick: PropTypes.func,
  }

  getClassName() {
    const {
      id,
      theme,
    } = this.props;
    const className = cnInlineIcon({
      id,
      theme,
    }, [this.props.className]);
    return className;
  }

  getIconComponent(id) {
    let iconId = id;
    let icons = solidIcons;
    const matchGroup = iconId.match(/^(\w+):(.*)/);
    if (matchGroup) {
      const [, groupId, nextId] = matchGroup;
      if (groupId && iconGroups[groupId] && nextId) {
        icons = iconGroups[groupId];
        iconId = nextId;
      }
    }
    const component = icons && icons[iconId] || icons['faQuestionCircle'];
    return component;
  }

  render() {

    const {
      id,
      tag,
      title,
      icon,
      onClick,
      // key,
    } = this.props;

    const iconType = typeof icon;
    // if (iconType !== 'string') {
    //   debugger
    // }

    // Create fortawesome icon element if passed icon image (svg icon)
    const iconComponent = (icon && iconType === 'string') ? this.getIconComponent(icon) : icon;
    const content = (iconComponent && iconComponent.iconName) ? <FontAwesomeIcon className={cnInlineIcon('IconImg')} icon={iconComponent} /> : iconComponent;

    const renderProps = {
      id,
      className: this.getClassName(),
      title,
      onClick,
      // key,
    };

    const tagName = tag || 'span';
    const element = React.createElement(tagName, renderProps, content);
    return element;
  }

}

export default InlineIcon;
