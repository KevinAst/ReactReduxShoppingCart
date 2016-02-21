'use strict';

import React           from 'react';
import { PropTypes }   from 'react'
import { formatMoney } from 'accounting';
import { connect }     from 'react-redux'
import ItemDetails     from './item-details';
import * as AC         from '../state/actionCreators' // AC: Action Creators

const ItemRow$ = ({item, itemExpanded, allowDetails, toggleItemDetailFn, allowBuy, buyItemFn, children, }) => {

  const genDetails = () => {
    if (!allowDetails)
      return null; // no-op if details are NOT allowed

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
    <li data-id={item.id} onClick={toggleItemDetailFn}>
      <img src={item.img} className="product"/>
      <div className="summary">
        <div className="name">
          { item.name }
        </div>
        <div className="pricing">
          <span   className="price">{ formatMoney(item.price) }</span>
          { allowBuy && <button className="buy" onClick={(e) => {e.stopPropagation(); buyItemFn();}}>Buy</button> }
        </div>
        {genDetails()}
      </div>
      {children && <div className="extra">{children}</div>}
    </li>
  );
}



//***
//*** wrap our internal ItemRow$ class with a ItemRow wrapper that injects properties
//*** (both data and behavior) from our state
//***

const mapStateToProps = (appState, ownProps) => {
  return {
    itemExpanded: appState.catalog.itemExpanded,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toggleItemDetailFn: (e) => { if (ownProps.allowDetails) dispatch(AC.toggleItemDetail(ownProps.item)) },
    buyItemFn:          (e) => { if (ownProps.allowBuy)     dispatch(AC.buyItem(ownProps.item)) },
  }
}

// wrap internal ItemRow$ with public ItemRow
// ... injecting needed properties
// ... this renders a single sub-component <ItemRow$> with the props defined above
//       ex:      <ItemRow/>
//       renders: <ItemRow><ItemRow$ prop1=xxx onClick=xxx/></ItemRow>
const ItemRow = connect(mapStateToProps, mapDispatchToProps)(ItemRow$)

// define expected props
ItemRow.propTypes = {
  item:         PropTypes.object.isRequired,
  allowDetails: PropTypes.bool,
  allowBuy:     PropTypes.bool,
  children:     PropTypes.node,
}

export default ItemRow;
