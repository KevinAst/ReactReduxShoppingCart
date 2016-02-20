'use strict';

import React           from 'react';
import { formatMoney } from 'accounting';
import { connect }     from 'react-redux'
import ItemDetails     from './item-details';
import * as AC         from '../state/actionCreators' // AC: Action Creators

let ItemRow = ({item, itemExpanded, buyClickedFn, children, dispatch }) => {

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
    <li data-id={item.id} onClick={(e) => dispatch(AC.toggleItemDetail(item))}>
      <img src={item.img} className="product"/>
      <div className="summary">
        <div className="name">
          { item.name }
        </div>
        <div className="pricing">
          <span   className="price">{ formatMoney(item.price) }</span>
          { buyClickedFn && <button className="buy" onClick={(e) => {e.stopPropagation(); buyClickedFn();}}>Buy</button> }
        </div>
        {genDetails() /* ??? WAS qualified with ... itemClicked && ... illiminated for inline semantics at ItemDetails */}
      </div>
      {children && <div className="extra">{children}</div>}
    </li>
  );
}

ItemRow = connect()(ItemRow) // wrap ItemRow with itself, injecting Redux dispatch (no access to store)


// ??? define expected props
// ? ItemRow.propTypes = {
// ?   filter:   PropTypes.string.isRequired,
// ?   children: PropTypes.node.isRequired,
// ? }

export default ItemRow;
