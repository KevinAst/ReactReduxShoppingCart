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

export const filterCatalogCategory = (category) => { // null for all
  return {
    type: AT.FILTER_CATALOG_CATEGORY,
    category,
  }
}

export const toggleItemDetail = (item) => {
  return {
    type: AT.TOGGLE_ITEM_DETAIL,
    item,
  }
}
