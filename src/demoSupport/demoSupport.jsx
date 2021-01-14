/** @module demoSupport
 *  @since 2020.10.05, 13:59
 *  @changed 2020.10.06, 22:07
 */
/* eslint-disable react/no-multi-comp */

import React from 'react';
import { cn } from 'utils/configure';
// import config from 'config'

// import './demoSupport.pcss'
import './demoFixtures.pcss';

export const FixtureInfo = ({ children }) => {
  return (
    <h2 className="FixtureInfo">{children}</h2>
  );
};

/** PlaceFixture
 * @param {Object} fixture - Fixture description object (as exported from cosmos fixture file)
 * @param {String} [fixtureItemId] - Fixture item selector (using as `fixture` object key)
 * @param {React.FC|React.Component=React.Fragment} [Wrapper] - Wrapping component (using React.Fragment if unspecified)
 * @param {String} [demoTitle] - Optional title for displaying before demo group element
 * @return {React.Element}
 */
export const PlaceFixture = ({ fixtureId, fixture, fixtureItemId, demoTitle, DemoWrapper = React.Fragment }) => {
  const cnFixture = cn('Fixture');
  let content;
  if (fixtureItemId) { // Display specific fixture item
    demoTitle += ' (' + fixtureItemId + ')';
    content = fixture[fixtureItemId];
    if (!content) {
      content = (
        <div className={cnFixture('Error')}>
          No fixture item `{fixtureItemId}` found!
        </div>
      );
    }
  }
  else { // Display entire fixture (all items)
    content = Object.entries(fixture).map(([id, Component]) => {
      // TODO: Filter out `background` proxy and non-component entries
      return { ...Component, key: id, id: id };
      // return (
      //   <div className="FixtureDemo">
      //     <div key="FixtureTitle" className="FixtureTitle">{id}</div>
      //     {{ ...Component, key: id }}
      //   </div>
      // )
    });
  }
  const contentWrapper = React.isValidElement(DemoWrapper) ? React.cloneElement(DemoWrapper, { key: 'content', fixtureId }, content) : (
    <DemoWrapper key="content" /* fixtureId={fixtureId} */>
      {content}
    </DemoWrapper>
  );
  return (
    <div className={cnFixture({ id: fixtureId })}>
      <FixtureInfo key="demoTitle">
        {demoTitle}
      </FixtureInfo>
      {contentWrapper}
    </div>
  );
};

export const FixturesContents = (hash) => {
  // TODO: Make styles for lists
  const cnFixturesContents = cn('FixturesContents');
  const listContent = hash && Object.entries(hash).map(([ id, fixtureExport ]) => {
    const link = '?fixture=' + id;
    const demoTitle = fixtureExport.demoTitle || /* 'Demo fixture: ' + */ id;
    const fixture = fixtureExport.default;
    // Create sub-items list...
    const itemsList = fixture && Object.keys(fixture).map((itemId) => {
      return (
        <li key={id + '_' + itemId} className={cnFixturesContents('Item', { subitem: true })}>
          <a href={link + ':' + itemId}>
            {itemId}
          </a>
        </li>
      );
    });
    const items = itemsList && (
      <ul className={cnFixturesContents('List', { subitems: true })}>
        {itemsList}
      </ul>
    );
    // Create full fixture description (link, title, sub-items)...
    return (
      <li key={id} className={cnFixturesContents('Item', { root: true })}>
        <span className={cnFixturesContents('ItemTitle', { root: true })}>
          <a href={link}>
            {demoTitle}
          </a>
        </span>
        {items}
      </li>
    );
  });
  // Create all fixtures list...
  return (
    <div className={cnFixturesContents()}>
      <FixtureInfo text="Available fixtures:" />
      <ul className={cnFixturesContents('List', { root: true })}>
        {listContent}
      </ul>
    </div>
  );
};
