'use strict';

import React         from 'react';
import ItemRow       from './item-row';
import { PropTypes } from 'react'

function Catalog({items, itemExpanded, buyFn, categories, catChangeFn}) {
  return (
    <div>
      {/* ??? L8TR
      Category:
      <select onChange={catChangeFn} className="category">
        <option value="">All</option>
        { categories.map(c =>
            <option key={c}
                    value={c}>
              {c}
            </option> )
        }
      </select>
      */}
      <ul className="product catalog">
        { items.map(item => (
            <ItemRow key={item.id}
                     item={item}
                     itemExpanded={itemExpanded}
                     buyClickedFnOLD={() => buyFn(item)}/>
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
  items:   PropTypes.array.isRequired,
  // ??? more
}

export default Catalog;
