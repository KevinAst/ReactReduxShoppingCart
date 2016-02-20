'use strict';

import React            from 'react';
import MyReactComponent from '../util/my-react-component';
import CatalogCtrl      from './catalog-ctrl';
// ? import Cart             from './cart';
// ? import Checkout         from './checkout';
// ? import Receipt          from './receipt';
// ? import shortid          from 'shortid';
// ? import Esc              from './util/esc';



// ***
// *** top-level App component
// ***

class App extends MyReactComponent {

  // ??? OBSOLETE
  // x constructor(...args) {
  // x   super(...args);
  // x 
  // x   this.state = {
  // x     category:     null,  // filter category <String>
  // x     itemExpanded: null,  // item to expand
  // x 
  // x 
  // x     // ***
  // x     // *** state related to cart
  // x     // ***
  // x 
  // x     cartOpen: false,
  // x     cartItems: [],
  // x 
  // x 
  // x     // ***
  // x     // *** state related to receipt
  // x     // ***
  // x 
  // x     receiptId:    null,
  // x     receiptItems: [],   // type: cartItems (with qty)
  // x 
  // x 
  // x     // ***
  // x     // *** state related to checkout
  // x     // ***
  // x 
  // x     checkoutOpen: false, // is the checkout dialog open?
  // x     total:        null,  // currency KJB: unsure yet how this is going to work
  // x 
  // x     // NOTE: fields within our checkeout MUST match <Checkout> form field names
  // x     addr1:      "", // string
  // x     addr2:      "", // string
  // x     city:       "", // string
  // x     state:      "", // string
  // x     zip:        "", // string
  // x     email:      "", // string
  // x     creditCard: "", // string
  // x     expiry:     "", // string
  // x     fullName:   "", // string
  // x     cvcode:     "", // string
  // x   };
  // x }

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
    return (
      <div>
        <CatalogCtrl/>
        {/* ??? L8TR other dialogs */}
      </div>
    )
  }


  // ??? OLD:
  // ? render() {
  // ?   const { items } = this.props;
  // ?   const { itemExpanded, cartOpen, category, checkoutOpen, receiptId } = this.state;
  // ?   return (
  // ?     <div>
  // ?       ??? OTHER DIALOGS
  // ?       { cartOpen && this.renderCartDialog() }
  // ?       { checkoutOpen && this.renderCheckoutDialog() }
  // ?       { receiptId && this.renderReceiptDialog() } {/* KJB: auto render receipt dialog, when checkout defines a receiptId  */}
  // ? 
  // ?       ??? THIS TOO
  // ?       <span className="cartButton">
  // ?         <a onClick={this.toggleCartDisplayed}>Cart</a>
  // ?       </span>
  // x 
  // x       <Catalog items={filteredItems}
  // x                itemExpanded={itemExpanded}
  // x                buyFn={this.buyItem}
  // x     </div>
  // x   );
  // x }


  // ??? PULL IN ... IN DIFFERENT WAYS ... LATER

  // ? // ***
  // ? // *** Cart related ...
  // ? // ***
  // ? 
  // ? renderCartDialog() {
  // ?   const cartItems = this.state.cartItems;
  // ?   return (
  // ?     <Cart cartItems={cartItems}
  // ?           closeFn={this.toggleCartDisplayed}
  // ?           removeItemFn={this.removeItem}
  // ?           changeQtyFn={this.changeQty}
  // ?           checkoutFn={total =>
  // ?             this.setState({checkoutOpen:true,  /* open checkout ... kinda new showCheckoutDialog() */
  // ?                            total: total        /* with this total */}) } />
  // ?   );
  // ? }
  // ? 
  // ? toggleCartDisplayed() {
  // ?   this.setState({ cartOpen: !this.state.cartOpen });
  // ? }
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
  // ? // buy selected item
  // ? // ... either place in our shopping cart (on first occurrance), or increment quantity (when item is already in cart)
  // ? // ... NOTE: KEY: this is where item is morphed into a cartItem
  // ? buyItem(item) { // NOTE: item is a raw item (from Catalog), NOT a cartItem
  // ?   // KJB: We want to setState with a new array of cartItems (because of our immutable state)
  // ?   //      ... we can re-use array elms (if they do not change)
  // ?   // KJB: This kjb version will NOT force existing cartItems to be at end
  // ? 
  // ?   // clone cartItems state array, identifying location of desired item (if present)
  // ?   let itemIndx = -1;
  // ?   const _cartItems = this.state.cartItems.filter( (x,indx) => {
  // ?     if (item.id === x.id)
  // ?       itemIndx = indx;
  // ?     return true; // retain all items
  // ?   });
  // ? 
  // ?   // if desired item is NOT present, inject new cartItem at end
  // ?   if (itemIndx === -1) {
  // ?     _cartItems.push( Object.assign({}, item, {qty: 0}) ); // NOTE: we morph a regular item into a cartItem here <KEY>!
  // ?     itemIndx = _cartItems.length - 1;
  // ?   }
  // ? 
  // ?   // increment our quantity
  // ?   _cartItems[itemIndx].qty++;
  // ? 
  // ?   // retain our state new state
  // ?   this.setState({
  // ?     cartOpen:     true,       // open cart
  // ?     cartItems:    _cartItems, // our new array with new cartItem or incremented qty
  // ?     itemExpanded: null        // close expansion (when expanded)
  // ?   });
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

export default App;
