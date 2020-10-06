/** @module demoSupport
 *  @since 2020.10.05, 13:59
 *  @changed 2020.10.06, 22:07
 */

import React from 'react'
import { cn } from '@bem-react/classname'
// import config from 'config'

// import './demoSupport.pcss'

export const FixtureInfo = ({ children }) => {
  return (
    <h3 className="FixtureInfo">{children}</h3>
  )
}

/** PlaceFixture
 * @param {Object} fixture - Fixture description object (as exported from cosmos fixture file)
 * @param {String} [fixtureItemId] - Fixture item selector (using as `fixture` object key)
 * @param {React.FC|React.Component=React.Fragment} [Wrapper] - Wrapping component (using React.Fragment if unspecified)
 * @param {String} [demoTitle] - Optional title for displaying before demo group element
 * @return {React.Element}
 */
export const PlaceFixture = ({ fixture, fixtureItemId, demoTitle, DemoWrapper = React.Fragment }) => {
  const cnFixture = cn('Fixture')
  let content
  if (fixtureItemId) {
    content = fixture[fixtureItemId]
    if (!content) {
      content = (
        <div className={cnFixture('Error')}>
          No fixture item `{fixtureItemId}` found!
        </div>
      )
    }
  }
  else {
    content = Object.entries(fixture).map(([key, Component]) => {
      return { ...Component, key }
    })
  }
  return (
    <div className={cnFixture()}>
      <FixtureInfo key="demoTitle">
        {demoTitle}
      </FixtureInfo>
      <DemoWrapper>
        {content}
      </DemoWrapper>
    </div>
  )
}

export const FixturesContents = (hash) => {
  // TODO: Make styles for lists
  const cnFixturesContents = cn('FixturesContents')
  const listContent = hash && Object.entries(hash).map(([ id, fixtureExport ]) => {
    const link = '?fixture=' + id
    const demoTitle = fixtureExport.demoTitle || /* 'Demo fixture: ' + */ id
    const fixture = fixtureExport.default
    // Create sub-items list...
    const itemsList = fixture && Object.keys(fixture).map((itemId) => {
      return (
        <li key={id + '_' + itemId} className={cnFixturesContents('Item', { subitem: true })}>
          <a href={link + ':' + itemId}>
            {itemId}
          </a>
        </li>
      )
    })
    const items = itemsList && (
      <ul className={cnFixturesContents('List', { subitems: true })}>
        {itemsList}
      </ul>
    )
    // Create full fixture description (link, title, sub-items)...
    return (
      <li key={id} className={cnFixturesContents('Item')}>
        <a href={link}>
          {demoTitle}
        </a>
        {items}
      </li>
    )
  })
  // Create all fixtures list...
  return (
    <div className={cnFixturesContents()}>
      <FixtureInfo text="Available fixtures:" />
      <ul className={cnFixturesContents('List')}>
        {listContent}
      </ul>
    </div>
  )
}
