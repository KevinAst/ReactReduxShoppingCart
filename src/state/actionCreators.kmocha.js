'use strict';

import { expect } from '../util/karma-setup';
import * as AT from './actionTypes'    // AT: Action Types
import * as AC from './actionCreators' // AC: Action Creators

// ***
// *** all actionCreators tests ...
// ***

describe('actionCreators tests', () => {

  it('test buyItem()', () => {
    expect(AC.buyItem("MyItem"))
          .toEqual({
              type: AT.BUY_ITEM,
              item: "MyItem",
          })
  })

  it('test closeCart()', () => {
    expect(AC.closeCart())
          .toEqual({
              type: AT.CLOSE_CART,
          })
  })

  it('test catalogItemsDefined()', () => {
    expect(AC.catalogItemsDefined([1,2,3]))
          .toEqual({
              type: AT.CATALOG_ITEMS_DEFINED,
              items: [1,2,3]
          })
  })

  it('test filterCatalogCategory()', () => {
    expect(AC.filterCatalogCategory("MyCategory"))
          .toEqual({
              type:     AT.FILTER_CATALOG_CATEGORY,
              category: "MyCategory"
          })
  })

  it('test openCart()', () => {
    expect(AC.openCart())
          .toEqual({
              type: AT.OPEN_CART,
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
