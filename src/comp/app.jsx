'use strict';

import React            from 'react';
import { connect }      from 'react-redux'
import MyReactComponent from '../util/my-react-component';
import CatalogCtrl      from './catalog-ctrl';
import Cart             from './cart';
// ? import Checkout         from './checkout';
// ? import Receipt          from './receipt';
// ? import shortid          from 'shortid';
// ? import Esc              from './util/esc';
import * as AC          from '../state/actionCreators' // AC: Action Creators



// ***
// *** top-level App component
// ***

class App$ extends MyReactComponent { // our internal App$ class (wrapped with App below)

  // ??? L8TR ??? I think this document handler can be accomplished globally in Esc ??? THIS WOULD render the App to be a VERY simple functional component
  // ? componentDidMount() {
  // ?   // register our master "keydown" event listener
  // ?   // ... registered at document level, to monitor key events page wide
  // ?   document.addEventListener('keydown', Esc.handleEscKey);
  // ? }

  // ??? L8TR
  // ? componentWillUnmount() {
  // ?   // register our master "keydown" event listener
  // ?   document.removeEventListener('keydown', Esc.handleEscKey);
  // ? }

  // ??? NEW
  render() {

    const { openCartFn } = this.props;

    return <div>
             <span className="cartButton">
               <a onClick={this.props.openCartFn}>Cart</a>
             </span>
             <CatalogCtrl/>

             {/* NOTE: Even though the following modal dialogs are injected here,
                       internally they are conditionally rendered ONLY when needed! */}
             <Cart/>
           </div>
  }


  // ??? OLD:
  // ? render() {
  // ?   const { items } = this.props;
  // ?   const { itemExpanded, cartOpen, category, checkoutOpen, receiptId } = this.state;
  // ?   return (
  // ?     <div>
  // ?       ??? OTHER DIALOGS
  // ?       { checkoutOpen && this.renderCheckoutDialog() }
  // ?       { receiptId && this.renderReceiptDialog() } {/* KJB: auto render receipt dialog, when checkout defines a receiptId  */}
  // ? 
  // x     </div>
  // x   );
  // x }


  // ??? PULL IN ... IN DIFFERENT WAYS ... LATER

  // ? // ***
  // ? // *** Cart related ...
  // ? // ***
  // ? 
  // ? 
  // ? removeItem(cartItem) {
  // ?   // filter out all but supplied item
  // ?   const _cartItems = this.state.cartItems.filter(x => cartItem.id !== x.id);
  // ?   this.setState({ cartItems: _cartItems });
  // ? }
  // ? 
  // ? changeQty(cartItem, nextQty) {
  // ?   const _cartItems = this.state.cartItems.map(x => {
  // ?     if (x.id === cartItem.id)
  // ?       return Object.assign({}, x, { qty: nextQty });
  // ?     else
  // ?       return x;
  // ?   });
  // ?   this.setState({ cartItems: _cartItems });
  // ? }
  // ? 
  // ? 
  // ? // ***
  // ? // *** Buy/Checkout related ...
  // ? // ***
  // ? 
  // ? renderCheckoutDialog() {
  // ?   const { total } = this.state;
  // ? 
  // ?   // fields to send to <Checkout> as a simple property object
  // ?   // ... making it simpler to pass to CheckOut
  // ?   const fields = {
  // ?     addr1:      this.state.addr1,
  // ?     addr2:      this.state.addr2,
  // ?     city:       this.state.city,
  // ?     state:      this.state.state,
  // ?     zip:        this.state.zip,
  // ?     email:      this.state.email,
  // ?     creditCard: this.state.creditCard,
  // ?     expiry:     this.state.expiry,
  // ?     fullName:   this.state.fullName,
  // ?     cvcode:     this.state.cvcode,
  // ?   };
  // ? 
  // ?   return (
  // ?     <div className="checkoutModal">
  // ?       <div className="checkoutContainer">
  // ?         <Checkout fields={fields}
  // ?                   updatedFn={this.updateCheckoutField}
  // ?                   total={total}
  // ?                   closeCheckoutFn={this.closeCheckoutDialog}
  // ?                   saleCompletedFn={this.saleCompleted} />
  // ?       </div>
  // ?     </div>
  // ?   );
  // ? }
  // ? 
  // ? updateCheckoutField(e) {
  // ?   // KJB: the property we wish to set is the same as the name of
  // ?   //      our input form field (defined in our event as: e.target.name)
  // ?   console.log(`SETTING: '${e.target.name}' TO: '${e.target.value}' `);
  // ?   this.setState({ [e.target.name]: e.target.value }); // KJB: use new ES6 feature: Computed Property Keys in our JSON
  // ? }
  // ? 
  // ? closeCheckoutDialog() {
  // ?   this.setState({ 
  // ?     checkoutOpen: false,
  // ?     creditCard:   null,      // clear sensitive state
  // ?     cvcode:       null,      // clear sensitive state
  // ?   });
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
