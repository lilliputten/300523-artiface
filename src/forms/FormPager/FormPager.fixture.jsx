/** @module FormPager.fixture
 *  @since 2021.06.07, 14:46
 *  @changed 2021.06.07, 15:31
 */
/* eslint-disable react/jsx-max-depth, no-console */

import React, { useState } from 'react';

import FormPager from './FormPager';

import { // Icons (solid)...
  faCheck,
} from '@fortawesome/free-solid-svg-icons';

// Demo styles for cosmos engine
// import 'demo.pcss';

import './FormPager.fixture.pcss';

export const demoTitle = 'FormPager component';

function onPageSelect(showPage) {
  console.log('FormPager.fixture:onPageSelect', { showPage });
}

const WithState = () => {
  const [showPage, setShowPage] = useState(1);
  return (
    <FormPager
      id="WithState"
      onPageSelect={setShowPage}
      totalPages={10}
      showPage={showPage}
      fullWidth
      align="center"
    />
  );
};

export default {
  simple: (
    <FormPager
      id="simple"
      onPageSelect={onPageSelect}
      totalPages={2}
      showPage={1}
      fullWidth
      align="center"
    />
  ),
  withState: <WithState />,
};
