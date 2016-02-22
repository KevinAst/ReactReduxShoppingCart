'use strict';

import * as AT from './actionTypes'    // AT: Action Types


// ***
// *** appState.checkout.visible reducer
// ***

export const visible = (visible=false, action) => {
  switch (action.type) {

    case AT.CHECKOUT:
      return true

    case AT.CLOSE_CHECKOUT:
      return false

    default:
      return visible
  }
}
