'use strict';

import * as AT from './actionTypes'    // AT: Action Types


// ***
// *** appState.catalog.itemExpanded reducer
// ***

export const itemExpanded = (itemExpanded=null, action) => {
  switch (action.type) {

    case AT.TOGGLE_ITEM_DETAIL:
      // toggle itemExpanded (when already expanded -and- same in action)
      // otherwise expand targeted item in action
      return itemExpanded && itemExpanded.id===action.item.id ? null : action.item

    default:
      return itemExpanded
  }
}
