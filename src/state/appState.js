'use strict';

import { combineReducers } from 'redux'
import { catalog } from './catalog'

// ***
// *** our app's top-level reducer
// ***

export const appState = combineReducers({
  catalog
  // ?? more here
})
