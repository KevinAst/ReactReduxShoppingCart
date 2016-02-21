'use strict'

import { expect }    from '../util/karma-setup'
import { cartItems } from './cart.cartItems'
import * as AC       from './actionCreators' // AC: Action Creators


// ***
// *** appState.cart.cartItems reducer tests
// ***

describe('appState.cart.cartItems reducer tests', () => {

  it('should handle initial state', () => {
    expect(cartItems(undefined, {}))
          .toEqual([])
  })

  it('handle NEW AC.buyItem() Action', () => {
    const item56        = { id: 56 }
    const curState      = []
    const nextState     = cartItems(curState, 
                                    AC.buyItem(item56))
    const expectedState = [ { id: 56, qty: 1 }]

    expect(nextState)
          .toEqual(expectedState)
          .toNotBe(curState) // immutable
  })

  it('handle EXISTING AC.buyItem() Action', () => {
    const item56        = { id: 56 }
    const curState      = [ { id: 56, qty: 3 }]
    const nextState     = cartItems(curState, 
                                    AC.buyItem(item56))
    const expectedState = [ { id: 56, qty: 4 }]

    expect(nextState)
          .toEqual(expectedState)
          .toNotBe(curState) // immutable
  })

  it('should ignore unrelated Actions', () => {
    const curState      = [ { id: 56, qty: 1 }]
    const nextState     = cartItems(curState, 
                                    { type: 'URELATED_ACTION'})
    const expectedState = curState

    expect(nextState)
          .toExist()
          .toEqual(expectedState)
          .toBe(curState) // immutable (however because unrelated, should BE the same ref)
  })

})
