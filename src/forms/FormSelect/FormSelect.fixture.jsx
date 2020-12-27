/** @module FormSelect.fixture
 *  @since 2020.10.28, 22:49
 *  @changed 2020.10.29, 03:14
 */
/* eslint-disable react/jsx-max-depth, no-console */

import React from 'react'
import FormSelect from './FormSelect'
import FormGroup from '../FormGroup'
import FormLabeledGroup from '../FormLabeledGroup'
import FormLabel from '../FormLabel'

// Demo styles for cosmos engine
import 'demo.pcss'

import './FormSelect.fixture.pcss'

// export const DemoWrapper = FormGroup // ({ children }) => {
export const DemoWrapper = <FormGroup stack id="Wrapper" /> // ({ children }) => {

const demoOptions = [
  { val: 1, text: 'Ruinning' },
  { val: 2, text: 'Swimming extra long text item name string value' },
]

const demoChange = ({ id, checked, value }) => {
  console.log('demoChange', { id, checked, value })
  // debugger
}

let popupNode
const setPopupNodeRef = (node) => {
  popupNode = node
}
const setScrollableRef = (node) => { // Scroll event handler demo
  node.addEventListener('scroll', (ev) => {
    const { scrollTop, scrollHeight, scrollLeft, scrollWidth } = ev.target
    console.log('FormSelect:fixture:Scroll demo', { scrollTop, scrollHeight, scrollLeft, scrollWidth })
    if (popupNode) {
      // console.log('FormSelect:fixture:Scroll demo: popupNode.updateGeometry', { popupNode })
      if (popupNode.updateGeometry) {
        // popupNode.updateGeometry()
      }
    }
  })
}

// TODO: With label
export default {
  simple: (
    <FormSelect
      title="Select title"
      text="Select"
      options={demoOptions}
    />
  ),
  withExtraOptions: (
    <FormSelect
      title="Select title"
      text="Select"
      options={demoOptions}
      singleChoice
      closeOnSelect
      controlButtonTheme="success"
      onChange={demoChange}
    />
  ),
  Question: (
    <FormSelect
      title="Select question"
      placeholder="Select some option"
      singleChoice="forced"
      _value={1}
      checked={[1]}
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
        title="Select question"
        placeholder="Select some option"
        checked={[2]}
        onChange={demoChange}
        options={demoOptions}
        controlButtonTheme="default"
        fullWidth
        // open
      />
    </FormGroup>
  ),
  withLabeledGroup: (
    <FormLabeledGroup id="withLabeledGroup" title="withLabeledGroup" fullWidth flow>
      <FormSelect
        title="Select question"
        placeholder="Select some option"
        checked={[2]}
        onChange={demoChange}
        options={demoOptions}
        controlButtonTheme="default"
        fullWidth
      />
    </FormLabeledGroup>
  ),
  /* withFixedWrapper: (
   *   <div className="Fixed-Curtain">
   *     <div className="Fixed-Wrapper">
   *       <div className="Fixed-Scrollable" ref={setScrollableRef}>
   *         <div className="Fixed-Container">
   *           <FormLabeledGroup id="withFixedWrapper" title="withFixedWrapper" fullWidth flow>
   *             <FormSelect
   *               title="Select question"
   *               placeholder="Select some option"
   *               checked={[2]}
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
}
