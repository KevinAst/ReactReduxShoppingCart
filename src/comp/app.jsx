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
  // ? updateCheckoutField(e) {
  // ?   // KJB: the property we wish to set is the same as the name of
  // ?   //      our input form field (defined in our event as: e.target.name)
  // ?   console.log(`SETTING: '${e.target.name}' TO: '${e.target.value}' `);
  // ?   this.setState({ [e.target.name]: e.target.value }); // KJB: use new ES6 feature: Computed Property Keys in our JSON
  // ? }
  // ? 
  // ? saleCompleted() {
  // ? 
  // ?   // Example of submitting to server ...
  // ?   // ... NOTE: we send server item ids and total, let it verify total again
  // ?   //           if anything is wrong return error
  // ?   // const postData = {
  // ?   //   itemIds:       this.state.cartItems.map(x => x.id), // list of items to purchase
  // ?   //   expectedTotal: this.state.total,      // show total we are expecting (shown to user)
  // ?   //   receiptId:     receiptId,             // we could supply the receipt id, or the server could gen (either approach is viable)
  // ?   //   email:         this.state.email,      // checkout form data for purchase
  // ?   //   creditCard:    this.state.creditCard,
  // ?   //   expiry:        this.state.expiry,
  // ?   //   fullName:      this.state.fullName,
  // ?   //   cvcode:        this.state.cvcode
  // ?   // };
  // ?   // 
  // ?   // axios.post(url, postData)
  // ?   //   .then(response => { // on successsuccess
  // ?   //     // setState here (see below)
  // ?   //   })
  // ?   //   .catch(response => {
  // ?   //     // handle error
  // ?   //   });
  // ? 
  // ?   // since we don't have a service, gen our reciptId, and change our state
  // ?   const receiptId = shortid.generate();
  // ?   this.setState({
  // ?     cartItems:    [],        // clear our shopping cart
  // ?     cartOpen:     false,     // close our shopping cart
  // ?     total:        null,
  // ?     checkoutOpen: false,     // close our buy/checkout dialog
  // ?     receiptId:    receiptId,
  // ?     receiptItems: this.state.cartItems,
  // ?     creditCard:   null,      // clear sensitive state
  // ?     cvcode:       null,      // clear sensitive state
  // ?   });
  // ? }
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
  // ? 
  // ? closeReceiptDialog() {
  // ?   this.setState({ 
  // ?     receiptId:    null,
  // ?     receiptItems: [],
  // ?   });
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
