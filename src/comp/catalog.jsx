'use strict';

import React         from 'react';
import ItemRow       from './item-row';
import { PropTypes } from 'react'

function Catalog({items, itemExpanded, filterCategory, changeFilterCategory, buyFn}) {

  const filteredItems = filterCategory ?
                          items.filter(item => item.category === filterCategory) :
                          items;
  return (
    <div>
      Category:
      <select onChange={ e => changeFilterCategory(e.target.value)}
              className="category">
        <option value="">All</option>
        { Catalog.CATEGORIES.map(cat =>
            <option key={cat}
                    value={cat}>
              {cat}
            </option> )
        }
      </select>
      <ul className="product catalog">
        { filteredItems.map(item => (
            <ItemRow key={item.id}
                     item={item}
                     itemExpanded={itemExpanded}
                     buyClickedFnOLD={ e => buyFn(item)}/>
          ))
        }
      </ul>
    </div>
  );
}

// ??? fix above
// ?? buyClickedFn={() => buyFn(item)}


// define expected props
Catalog.propTypes = {
  items:                PropTypes.array.isRequired,
  itemExpanded:         PropTypes.object,
  filterCategory:       PropTypes.string,
  changeFilterCategory: PropTypes.func.isRequired,
  // ??? more
}

Catalog.CATEGORIES = ['Nature', 'React.js']; // filter categories to select from

export default Catalog;
