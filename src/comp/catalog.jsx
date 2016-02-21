'use strict';

import React         from 'react';
import ItemRow       from './item-row';
import { PropTypes } from 'react'

function Catalog({items, filterCategory, changeFilterCategory}) {

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
                     allowBuy={true}
                     allowDetails={true}/>
          ))
        }
      </ul>
    </div>
  );
}

// define expected props
Catalog.propTypes = {
  items:                PropTypes.array.isRequired,
  filterCategory:       PropTypes.string, // ??? this can come from appState.catalog.filterCategory
  changeFilterCategory: PropTypes.func.isRequired, // ??? this can be just dispatch a new action
}

Catalog.CATEGORIES = ['Nature', 'React.js']; // filter categories to select from

export default Catalog;
