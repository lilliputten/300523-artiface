/** @module FormSelect.fixture
 *  @since 2020.10.28, 22:49
 *  @changed 2021.07.07, 19:55
 */
/* eslint-disable react/jsx-max-depth, no-console */

import React from 'react';
import FormSelect from './FormSelect';
import FormGroup from '../FormGroup';
import FormLabeledGroup from '../FormLabeledGroup';
import FormLabel from '../FormLabel';

// Demo styles for cosmos engine
// import 'demo.pcss';

import './FormSelect.fixture.pcss';

// export const DemoWrapper = FormGroup // ({ children }) => {
export const DemoWrapper = <FormGroup stack id="Wrapper" />; // ({ children }) => {

const demoOptions = [
  { val: 1, text: 'Ruinning' },
  { val: 2, text: 'Swimming extra long text item name string value' },
];

const demoChange = (params) => {
  const { id, selected, value } = params;
  console.log('FormSelect.fixture:demoChange', { id, selected, value, params });
  // debugger
};

/* // Handlers used for `withFixedWrapper`
 * let popupNode
 * const setPopupNodeRef = (node) => {
 *   popupNode = node
 * }
 * const setScrollableRef = (node) => { // Scroll event handler demo
 *   node.addEventListener('scroll', (ev) => {
 *     const { scrollTop, scrollHeight, scrollLeft, scrollWidth } = ev.target
 *     console.log('FormSelect:fixture:Scroll demo', { scrollTop, scrollHeight, scrollLeft, scrollWidth })
 *     if (popupNode) {
 *       // console.log('FormSelect:fixture:Scroll demo: popupNode.updateGeometry', { popupNode })
 *       if (popupNode.updateGeometry) {
 *         // popupNode.updateGeometry()
 *       }
 *     }
 *   })
 * }
 */

export default {
  simple: (
    <FormSelect
      title="Select title"
      text="Select"
      options={demoOptions}
      onChange={demoChange}
    />
  ),
  withExtraOptions: (
    <FormSelect
      title="Select title"
      text="Select"
      options={demoOptions}
      controlButtonTheme="success"
      itemTheme="success"
      // itemSelectedTheme="success"
      onChange={demoChange}
      singleChoice
      closeOnSelect
      wrapContent
      maxWidth={100}
    />
  ),
  Question: (
    <FormSelect
      title="Select question"
      placeholder="Select some option"
      singleChoice="forced"
      _value={1}
      selected={[1,2]}
      onChange={demoChange}
      options={demoOptions}
      closeOnSelect
      controlButtonTheme="default"
      fullWidth
      // open
    />
  ),
  withLabel: (
    <FormGroup id="withLabel" flow fullWidth>
      <FormLabel htmlFor="testId" title="Label title">Label</FormLabel>
      <FormSelect
        inputId="testId"
        title="Select question"
        placeholder="Select some option"
        selected={[2]}
        onChange={demoChange}
        options={demoOptions}
        controlButtonTheme="default"
        fullWidth
        // open
      />
    </FormGroup>
  ),
  withLabeledGroup: (
    <FormLabeledGroup id="withLabeledGroup" htmlFor="withLabeledGroup-Label" title="withLabeledGroup" fullWidth flow>
      <FormSelect
        inputId="withLabeledGroup-Label"
        title="Select question"
        placeholder="Select some option"
        selected={[2]}
        onChange={demoChange}
        options={demoOptions}
        controlButtonTheme="default"
        fullWidth
      />
    </FormLabeledGroup>
  ),
  /* withFixedWrapper: ( // Used for debug popups in fixed positioned containers
   *   <div className="Fixed-Curtain">
   *     <div className="Fixed-Wrapper">
   *       <div className="Fixed-Scrollable" ref={setScrollableRef}>
   *         <div className="Fixed-Container">
   *           <FormLabeledGroup id="withFixedWrapper" title="withFixedWrapper" fullWidth flow>
   *             <FormSelect
   *               title="Select question"
   *               placeholder="Select some option"
   *               selected={[2]}
   *               onChange={demoChange}
   *               options={demoOptions}
   *               controlButtonTheme="default"
   *               fullWidth
   *               setPopupNodeRef={setPopupNodeRef}
   *             />
   *           </FormLabeledGroup>
   *         </div>
   *       </div>
   *     </div>
   *   </div>
   * ),
   */
};
