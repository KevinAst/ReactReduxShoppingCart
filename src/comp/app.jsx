'use strict';

import React            from 'react';
import { connect }      from 'react-redux'
import MyReactComponent from '../util/my-react-component';
import Catalog          from './catalog';
import Cart             from './cart';
import Checkout         from './checkout';
// ? import Receipt          from './receipt';
// ? import shortid          from 'shortid';
import * as AC          from '../state/actionCreators' // AC: Action Creators



// ***
// *** top-level App component
// ***

class App$ extends MyReactComponent { // our internal App$ class (wrapped with App below)

  render() {

    const { cartVisible, checkoutVisible, openCartFn } = this.props;

    return <div>
             <span className="cartButton">
               <a onClick={this.props.openCartFn}>Cart</a>
             </span>
             <Catalog/>
             { cartVisible     && <Cart/> }
             { checkoutVisible && <Checkout/> }
           </div>
  }


  // ??? OLD:
  // ? render() {
  // ?   const { items } = this.props;
  // ?   const { itemExpanded, cartOpen, category, checkoutOpen, receiptId } = this.state;
  // ?   return (
  // ?     <div>
  // ?       ??? OTHER DIALOGS
  // ?       { receiptId && this.renderReceiptDialog() } {/* KJB: auto render receipt dialog, when checkout defines a receiptId  */}
  // ? 
  // x     </div>
  // x   );
  // x }


  // ??? PULL IN ... IN DIFFERENT WAYS ... LATER

  // ? // ***
  // ? // *** Buy/Checkout related ...
  // ? // ***
  // ? 
  // ? 
  // ? // ***
  // ? // *** Receipt related ...
  // ? // ***
  // ? 
  // ? renderReceiptDialog () {
  // ?   return (
  // ?     <Receipt 
  // ?         cartItems={this.state.receiptItems}
  // ?         receiptId={this.state.receiptId}
  // ?         closeFn={this.closeReceiptDialog} />
  // ?   );
  // ? }

}





//***
//*** wrap our internal App$ class with a App wrapper that injects properties
//*** (both data and behavior) from our state
//***

const mapStateToProps = (appState, ownProps) => {
  return {
    cartVisible:     appState.cart.visible,
    checkoutVisible: appState.checkout.visible,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    openCartFn: () =>  { dispatch(AC.openCart()) },
  }
}

const App = connect(mapStateToProps, mapDispatchToProps)(App$)
  // NOTE: This renders a single sub-component <App$> with the props defined above
  //        ex:      <App/>
  //        renders: <App><App$ prop1=xxx onClick=xxx/></App>

  // define expected props
  App.propTypes = {
  }

export default App;
