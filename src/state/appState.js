// **************************************
// *** document our complete appState ***
// **************************************
/*
    appState = {

      ??? use fully qualified name in Component props -AND- reducer names, etc.
      ??? use abrievated names below (qualified by parent node)
   
      display: {
        items:               [],    // items list [ { id: <int>, name: <string>, price: <int>, img: <string>, category: <string>, desc: <string>, details: <string> ]
        itemsFilterCategory: null,  // item filter category <String> ??? WAS: category
        itemIdExpanded:      null,  // item.id to expand <int> ??? WAS: itemExpanded: null,  // item to expand
      },
   
      cart: {
        cartOpen: false,
        cartItems: [],      // shopping cart item list [ { ...item, qty: <int> } ]
      },
   
      receipt: {
        receiptId:    null, // receipt id <???>
        receiptItems: [],   // recepipt item list [ { ...cartItems } ]
      },
   
      checkout: {
        checkoutOpen:  false, // is the checkout dialog open?
        checkoutTotal: null,  // total amount being checked out <???>  ??? WAS: total
   
        // NOTE: the checkout fields MUST MATCH our <Checkout> form field names
        fields: {
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
*/


// *********************************************
// *** promote our combined appState reducer ***
// *********************************************

// ??? do it
