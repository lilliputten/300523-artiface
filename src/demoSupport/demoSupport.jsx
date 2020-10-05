/** @module demoSupport
 *  @since 2020.10.05, 13:59
 *  @changed 2020.10.05, 20:31
 */

import React from 'react'
import { cn } from '@bem-react/classname'
// import config from 'config'

// import './demoSupport.pcss'

export const FixtureInfo = ({ text }) => {
  return (
    <h3 className="FixtureInfo">{text}</h3>
  )
}

/** PlaceFixture
 * @param {Object} fixture - Fixture description object (as exported from cosmos fixture file)
 * @param {React.FC|React.Component=React.Fragment} [Wrapper] - Wrapping component (using React.Fragment if unspecified)
 * @param {String} [demoTitle] - Optional title for displaying before demo group element
 * @return {React.Element}
 */
export const PlaceFixture = ({ fixture, demoTitle, DemoWrapper = React.Fragment }) => {
  const cnFixture = cn('Fixture')
  // DemoWrapper = React.Fragment
  const content = Object.entries(fixture).map(([key, Component]) => {
    return { ...Component, key }
  })
  return (
    <div className={cnFixture()}>
      <FixtureInfo text={demoTitle} key="demoTitle" />
      <DemoWrapper>
        {content}
      </DemoWrapper>
    </div>
  )
}

export const FixturesContents = (hash) => {
  const cnFixturesContents = cn('FixturesContents')
  const listContent = hash && Object.entries(hash).map(([ id, item ]) => {
    const link = '?fixture=' + id
    const demoTitle = item.demoTitle || /* 'Demo fixture: ' + */ id
    return (
      <li key={id} className={cnFixturesContents('Item')}>
        <a href={link}>
          {demoTitle}
        </a>
      </li>
    )
  })
  return (
    <div className={cnFixturesContents()}>
      <FixtureInfo text="Available fixtures:" />
      <ul className={cnFixturesContents('List')}>
        {listContent}
      </ul>
    </div>
  )
}
