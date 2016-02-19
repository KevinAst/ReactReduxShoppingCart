'use strict';

import React           from 'react';
import { formatMoney } from 'accounting';
import ItemDetails     from './item-details';

function ItemRow({item, itemExpanded, buyClickedFn, itemClicked, children }) {

  const genDetails = () => {
    if (item === itemExpanded )
      return <span>
               <button>
                 Collapse Details
               </button>
               <ItemDetails item={itemExpanded}/>
             </span>;
    else
      return <span>
               <button>
                 Expand Details
               </button>
             </span>;
  };

  return (
    <li data-id={item.id} onClick={(e) => itemClicked(item)}>
      <img src={item.img} className="product"/>
      <div className="summary">
        <div className="name">
          { item.name }
        </div>
        <div className="pricing">
          <span   className="price">{ formatMoney(item.price) }</span>
          { buyClickedFn && <button className="buy" onClick={(e) => {e.stopPropagation(); buyClickedFn();}}>Buy</button> }
        </div>
        {itemClicked && genDetails()}
      </div>
      {children && <div className="extra">{children}</div>}
    </li>
  );
}

// ??? define expected props
// ? ItemRow.propTypes = {
// ?   filter:   PropTypes.string.isRequired,
// ?   children: PropTypes.node.isRequired,
// ? }

export default ItemRow;
