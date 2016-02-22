'use strict';

import * as AT from './actionTypes'    // AT: Action Types


// ***
// *** appState.checkout.total reducer
// ***

export const total = (total=0, action) => {
  switch (action.type) {

    case AT.CHECKOUT:
      return action.total

    default:
      return total
  }
}
