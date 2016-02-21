'use strict';

import { combineReducers } from 'redux'
import { catalog }         from './catalog'
import { cart }            from './cart'

// ***
// *** our app's top-level reducer
// ***

export const appState = combineReducers({
  catalog,
  cart,
})
