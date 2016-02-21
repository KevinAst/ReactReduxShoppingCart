'use strict';

import { expect } from '../util/karma-setup';
import { itemExpanded } from './catalog.itemExpanded'
import * as AC from './actionCreators' // AC: Action Creators


// ***
// *** appState.catalog.itemExpanded reducer tests
// ***

describe('appState.catalog.itemExpanded reducer tests', () => {

  it('should handle initial state', () => {
    expect(itemExpanded(undefined, {}))
          .toEqual(null)
  })

  it('handle toggle AC.toggleItemDetail() Action', () => {

    const item1 = {id:1}
    const item2 = {id:2}

    const curState  = item1;
    const nextState = itemExpanded(curState, 
                                   AC.toggleItemDetail(item1))
    const expectedState = null

    expect(nextState)
          .toEqual(expectedState)
          .toNotBe(curState) // immutable
  })

  it('handle expand new AC.toggleItemDetail() Action', () => {

    const item1 = {id:1}
    const item2 = {id:2}

    // transition expansion from item1 to item2
    const curState  = item1;
    const nextState = itemExpanded(curState, 
                                   AC.toggleItemDetail(item2))
    const expectedState = item2

    expect(nextState)
          .toEqual(expectedState)
          .toNotBe(curState) // immutable
  })

  // ??? may NOT be needed, since in our retrofit other usage of ItemRow will ignore expansion
  // ? it('handle collapse for AC.buyItem() Action', () => {
  // ? 
  // ?   const item1 = {id:1}
  // ?   const item2 = {id:2}
  // ? 
  // ?   // transition expansion when buying any item
  // ?   const curState  = item1;
  // ?   const nextState = itemExpanded(curState, 
  // ?                                  AC.buyItem(item2))
  // ?   const expectedState = null
  // ? 
  // ?   expect(nextState)
  // ?         .toEqual(expectedState)
  // ?         .toNotBe(curState) // immutable
  // ? })

  it('should ignore unrelated Actions', () => {

    const curState  = {id:1};
    const nextState = itemExpanded(curState, 
                                   { type: 'URELATED_ACTION'})
    const expectedState = curState

    expect(nextState)
          .toExist()
          .toEqual(expectedState)
          .toBe(curState) // immutable (however because unrelated, should BE the same ref)
  })

})
