'use strict';

import * as AT from './actionTypes'    // AT: Action Types
import { combineReducers } from 'redux'
import { items } from './catalog.items'


// ***
// *** appState.catalog reducer
// ***

export const catalog = combineReducers({
  items
  // ?? more here
})
