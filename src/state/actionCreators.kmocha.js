'use strict';

import { expect } from '../util/karma-setup';
import * as AT from './actionTypes'    // AT: Action Types
import * as AC from './actionCreators' // AC: Action Creators

// ***
// *** all actionCreators tests ...
// ***

describe('actionCreators tests', () => {

  it('test catalogItemsDefined()', () => {
    expect(AC.catalogItemsDefined([1,2,3]))
          .toEqual({
              type: AT.CATALOG_ITEMS_DEFINED,
              items: [1,2,3]
          })
  })

  it('test toggleItemDetail()', () => {
    expect(AC.toggleItemDetail("MyItem"))
          .toEqual({
              type: AT.TOGGLE_ITEM_DETAIL,
              item: "MyItem"
          })
  })

})
