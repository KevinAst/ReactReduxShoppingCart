'use strict';

import React                     from 'react'
import { connect }               from 'react-redux'
import MyReactComponent          from '../util/my-react-component'
import ItemRow                   from './item-row' // NOTE: we re-use our ItemRow component
import { formatMoney }           from 'accounting'
import { totalItems, unitPrice } from '../util/money'
import Esc                       from '../util/esc'
import * as AC                   from '../state/actionCreators' // AC: Action Creators


// ***
// *** shopping Cart component
// ***

class Cart$ extends MyReactComponent { // our internal Cart$ class (wrapped with Cart below)

  componentDidMount() {
    // TODO: ?? not quite right, as componentDidMount is invoked ONLY once, I assume due to the render() return null
    // TODO: ?? may be easier just to put the conditional logic back in App
    console.log("?? in         Cart.componentDidMount()")
    if (!this.props.visible) // ... no-op when NOT visible (i.e. nothing rendered)
      return;                // ... because we are still invoked even when nothing rendered (i.e. render() return null)
    console.log("?? processing Cart.componentDidMount()")
    Esc.regEscHandler(this.props.closeCartFn);
  }

  componentWillUnmount() {
    Esc.unregEscHandler(this.props.closeCartFn);
  }

  render() {
    const { visible, cartItems, closeCartFn, changeQtyFn, removeItemFn, checkoutFn } = this.props;

    // no-op when we are NOT visible
    if (!visible)
      return null

    // when we are visible, render away
    return (
      <div className="modal cart">
    
        <button className="continue"
                onClick={closeCartFn}>Continue shopping</button>
    
        <button className="checkout"
                onClick={e => checkoutFn(totalItems(cartItems), e)}
                disabled={totalItems(cartItems) <= 0}>Checkout</button>
    
        <h1>Cart</h1>
        <ul>
          { cartItems.map(cartItem =>
            <ItemRow key={cartItem.id}
                     item={cartItem} >
              <span className="qty">
                Quantity:
                <input name="qty"
                       value={cartItem.qty}
                       onChange={e => changeQtyFn(cartItem, parseInt(e.target.value, 10) || 0)} />
              </span>

              <span style={{display:       "inline-flex",
                            flexDirection: "column",
                            fontSize:      '75%',
                            fontWeight:    'bold',
                            cursor:        'pointer'}}>
                <i className="fa fa-angle-double-up"
                   title="increase quantity"
                   onClick={e => changeQtyFn(cartItem, cartItem.qty+1)}></i>
                <i className="fa fa-angle-double-down"
                   title="decrease quantity"
                   onClick={e => changeQtyFn(cartItem, cartItem.qty-1)}></i>
              </span>
    
              <button className="remove" onClick={e => removeItemFn(cartItem)} >Remove</button>
    
              <span className="lineTotal">
                { formatMoney(unitPrice(cartItem.price, cartItem.qty)) }
              </span>
            </ItemRow> ) }
        </ul>
        <div className="total">Total:
          <span className="formattedTotal">{ formatMoney(totalItems(cartItems)) }</span>
        </div>
      </div>
    );
  }
}




//***
//*** wrap our internal Cart$ class with a Cart wrapper that injects properties
//*** (both data and behavior) from our state
//***

const mapStateToProps = (appState, ownProps) => {
  return {
    visible:   appState.cart.visible,
    cartItems: appState.cart.cartItems,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    closeCartFn:  ()              =>  { dispatch( AC.closeCart() ) },
    changeQtyFn:  (cartItem, qty) =>  { if (qty>=0) dispatch( AC.setCartItemQty(cartItem, qty) ) },
    removeItemFn: (cartItem)      =>  { dispatch( AC.removeCartItem(cartItem) ) },
    // checkoutFn ??? remains
  }
}

const Cart = connect(mapStateToProps, mapDispatchToProps)(Cart$)
  // NOTE: This renders a single sub-component <Cart$> with the props defined above
  //        ex:      <Cart/>
  //        renders: <Cart><Cart$ prop1=xxx onClick=xxx/></Cart>

// define expected props
Cart.propTypes = {
}

export default Cart;
