/** @module FormPager
 *  @class FormPager
 *  @since 2021.06.07, 14:46
 *  @changed 2021.06.07, 15:45
 */
/* eslint-disable react/require-default-props, react/no-unused-prop-types */

import React from 'react';
import { compose } from 'redux';
import connect from 'react-redux/lib/connect/connect';
import PropTypes from 'prop-types';
import { cn } from 'utils/configure';

import { // Icons (solid)...
  faAngleRight,
  faAngleLeft,
  faAngleDoubleRight,
  faAngleDoubleLeft,
} from '@fortawesome/free-solid-svg-icons';

import FormItemHOC from '../FormItemHOC';
import FormGroup from '../FormGroup';
import FormButton from '../FormButton';

import { getCommonLangText } from 'utils/lang';
// import * as langUtils from 'utils/lang';

// import { // ActionsContext...
//   ActionsContextProvider,
//   withActionsContext,
// } from 'helpers/ActionsContext';

import './FormPager.pcss';

const cnFormPager = cn('FormPager');

const visibleRadius = 2; // Show pages around current page
const visibleItemsCount = visibleRadius * 2; // Max visible items count

const FormPagerItem = (props) => {
  const {
    type,
    onClick,
    action,
  } = props;
  return (
    <FormButton
      theme="default"
      {...props}
      className={cnFormPager('Item', { type })}
      onClick={onClick && onClick.bind(null, action)}
    />
  );
};

class FormPager extends React.PureComponent /** @lends @FormPager.prototype */ {

  static propTypes = {
    onPageSelect: PropTypes.func,
    // lang: PropTypes.objectOf(PropTypes.object),
    showPage: PropTypes.number, // Cardinal, {1..totalPages}
    totalPages: PropTypes.number,
    noSpace: PropTypes.bool,
    fullWidth: PropTypes.bool,
    align: PropTypes.string,
    className: PropTypes.string,
  }

  // Lifecycle...

  constructor(props) {
    super(props);
    this.state = {
      showPage: props.showPage,
    };
  }

  componentDidUpdate(prevProps) { // Versatile state -- as managed or autonomous component
    const prevPropsPage = prevProps.showPage;
    const currPropsPage = this.props.showPage;
    if (prevPropsPage !== currPropsPage) {
      this.setState({ showPage: currPropsPage });
    }
  }

  // Handlers...

  onPageClick = (action) => {
    const { page } = action;
    // console.log('FormPager:onPageClick', {
    //   id: this.props.id,
    //   action,
    //   page,
    // });
    this.setState({ showPage: page });
    const { onPageSelect } = this.props;
    if (typeof onPageSelect === 'function' && page) {
      onPageSelect(page);
    }
  }

  // Render...

  render() {
    const {
      id,
      totalPages,
      noSpace,
      fullWidth,
      align,
      lang,
    } = this.props;
    const { showPage } = this.state;

    // console.log('FormPager:render', {
    //   id,
    //   totalPages,
    //   showPage,
    // });

    // Calculate pages to display...
    let startPage = Math.max(1, showPage - visibleRadius);
    let endPage = startPage + visibleItemsCount;
    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, endPage - visibleItemsCount);
    }

    // Generate page buttons...
    const pages = [];
    for (let page = startPage; page <= endPage; page++) {
      const current = page === showPage;
      pages.push(<FormPagerItem
        key={String(page)}
        text={String(page)}
        onClick={this.onPageClick}
        action={{ id, page }}
        type="page"
        theme={current ? 'primary' : 'default'}
      />);
    }

    const showPrev = showPage > 1;
    const showNext = showPage < totalPages;

    const showFirst = showPage > 2;
    const showLast = showPage < totalPages - 1;

    const showPrevGroup = (endPage - visibleItemsCount > 2);
    const prevGroupPage = showPage - visibleItemsCount;
    const showNextGroup = (startPage + visibleItemsCount < totalPages - 1);
    const nextGroupPage = showPage + visibleItemsCount;

    const groupProps = {
      noSpace,
      fullWidth,
      align,
    };

    return (
      <div className={cnFormPager(groupProps, [this.props.className])}>
        <FormGroup {...groupProps}>
          {/* First page */}
          {showFirst && <FormPagerItem
            type="specialBound"
            onlyIcon icon={faAngleDoubleLeft}
            title={getCommonLangText('firstPage', lang)}
            onClick={this.onPageClick}
            action={{ id, page: 1 }}
            theme="plain"
          />}
          {/* Show prev page */}
          {showPrev && <FormPagerItem
            type="specialBound"
            onlyIcon icon={faAngleLeft}
            title={getCommonLangText('prevPage', lang)}
            onClick={this.onPageClick}
            action={{ id, page: showPage - 1 }}
            theme="plain"
          />}
          {/* Show prev range */}
          {showPrevGroup && <FormPagerItem
            type="specialMore"
            text="..."
            title={getCommonLangText('prevGroup', lang)}
            onClick={this.onPageClick}
            action={{ id, page: prevGroupPage }}
            theme="plain"
          />}
          {pages}
          {/* Show next range */}
          {showNextGroup && <FormPagerItem
            type="specialMore"
            text="..."
            title={getCommonLangText('nextGroup', lang)}
            onClick={this.onPageClick}
            action={{ id, page: nextGroupPage }}
            theme="plain"
          />}
          {/* Show next page */}
          {showNext && <FormPagerItem
            type="specialBound"
            onlyIcon icon={faAngleRight}
            title={getCommonLangText('nextPage', lang)}
            onClick={this.onPageClick}
            action={{ id, page: showPage + 1 }}
            theme="plain"
          />}
          {/* Last page */}
          {showLast && <FormPagerItem
            type="specialBound"
            onlyIcon icon={faAngleDoubleRight}
            title={getCommonLangText('lastPage', lang)}
            onClick={this.onPageClick}
            action={{ id, page: totalPages }}
            theme="plain"
          />}
        </FormGroup>
      </div>
    );
  }

}

const mapStateToProps = store => ({
  lang: store.language,
  // language: store.language,
  // commonLang: store && store.language && store.language && store.language.components.common || {},
});
export default compose(
  // withActionsContext,
  FormItemHOC,
  connect(mapStateToProps),
)(FormPager);

