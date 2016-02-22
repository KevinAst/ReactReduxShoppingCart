'use strict';

import React            from 'react';
import { connect }      from 'react-redux'
import MyReactComponent from '../util/my-react-component';
import Catalog          from './catalog';
import Cart             from './cart';
import Checkout         from './checkout';
import Receipt          from './receipt';
import * as AC          from '../state/actionCreators' // AC: Action Creators



// ***
// *** top-level App component
// ***

class App$ extends MyReactComponent { // our internal App$ class (wrapped with App below)

  render() {

    const { cartVisible, checkoutVisible, receiptId, openCartFn } = this.props;

    return <div>
             <span className="cartButton">
               <a onClick={this.props.openCartFn}>Cart</a>
             </span>
             <Catalog/>
             { cartVisible     && <Cart/> }
             { checkoutVisible && <Checkout/> }
             { receiptId       && <Receipt/> }
           </div>
  }

}




//***
//*** wrap our internal App$ class with a App wrapper that injects properties
//*** (both data and behavior) from our state
//***

const mapStateToProps = (appState, ownProps) => {
  return {
    cartVisible:     appState.cart.visible,
    checkoutVisible: appState.checkout.visible,
    receiptId:       appState.receipt.id,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    openCartFn: () =>  { dispatch(AC.openCart()) },
  }
}

// wrap internal App$ with public App
// ... injecting needed properties
// ... this renders a single sub-component <App$> with the props defined above
//       ex:      <App/>
//       renders: <App><App$ prop1=xxx onClick=xxx/></App>
const App = connect(mapStateToProps, mapDispatchToProps)(App$)

// define expected props
App.propTypes = {
}

export default App;
