'use strict';

import { combineReducers } from 'redux'
import { catalog }         from './catalog'
import { cart }            from './cart'
import { checkout }        from './checkout'

// ***
// *** our app's top-level reducer
// ***

export const appState = combineReducers({
  catalog,
  cart,
  checkout,
})
