'use strict';

import React           from 'react';
import { formatMoney } from 'accounting';

// ***
// *** ItemDetails component
// ***

const ItemDetails = ({item}) => {
  return <div className="details"
              data-id={item.id}>
           <div><span className="text-label">Category:</span>    { item.category }</div>
           <div><span className="text-label">Price:</span>       { formatMoney(item.price) }</div>
           <div><span className="text-label">Description:</span> { item.desc }</div>
           <div><span className="text-label">Details:</span>     { item.details }</div>
         </div>
}


// define expected props ??? requires item
// ? ItemDetails.propTypes = {
// ?   filter:   PropTypes.string.isRequired,
// ?   children: PropTypes.node.isRequired,
// ? }

export default ItemDetails;
