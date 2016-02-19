# Shopping Cart App State

Our Shopping Cart maintains a single persistant store, employing the
Redux pattern of Actions and Reducers.  In essance these are business
events, that drive our apps state transition.

All logic for state definition/transition is found in src/state/

    src/
      state/
        actionTypes.js ...... all action types (defined constants)

        actionCreators.js ... all action creators
        actionCreators.kmocha.js

        appState.js ......... our app's top-level reducer (a Redux combineReducer)

        catalog.js .......... appState.catalog reducer (a Redux combineReducer)

        catalog.items.js .... appState.catalog.items reducer
        catalog.items.kmocha.js

        ??? more

Our app state is a Redux store, and is promoted through the
react-redux <Provider> component (see the bootstrap process in
src/browser.jsx).  This makes the app state available to any component
that ???.  This is a bit of majic, however under the covers it
utilizes the React Context feature.


## State Specification

```javascript
{
  catalog: {
    items:               [],    // items list [ { id: <int>, name: <string>, price: <int>, img: <string>, category: <string>, desc: <string>, details: <string> ]
??  itemsFilterCategory: null,  // item filter category <String> ??? WAS: category
    itemExpanded:        null,  // item to expand {...item} null for no expansion
  },

  cart: {
??  cartOpen: false,
??  cartItems: [],      // shopping cart item list [ { ...item, qty: <int> } ]
  },

  receipt: {
??  receiptId:    null, // receipt id <???>
??  receiptItems: [],   // recepipt item list [ { ...cartItems } ]
  },

  checkout: {
??  checkoutOpen:  false, // is the checkout dialog open?
??  checkoutTotal: null,  // total amount being checked out <???>  ??? WAS: total

    // NOTE: These checkout.fields MUST MATCH the <Checkout> form field names
??  fields: {
      addr1:      "", // <string>
      addr2:      "", // <string>
      city:       "", // <string>
      state:      "", // <string>
      zip:        "", // <string>
      email:      "", // <string>
      creditCard: "", // <string>
      expiry:     "", // <string>
      fullName:   "", // <string>
      cvcode:     "", // <string>
    }
  }
}
```
