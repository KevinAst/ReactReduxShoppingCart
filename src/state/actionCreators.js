'use strict';

import * as AT from './actionTypes'    // AT: Action Types


// ***
// *** all action creators ...
// ***

export const catalogItemsDefined = (items) => {
  return {
    type: AT.CATALOG_ITEMS_DEFINED,
    items,
  }
}
