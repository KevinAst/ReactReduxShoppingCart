'use strict';

import React from 'react'; // ??? needed?
// ? import ItemRow from './item-row'; ??? L8TR

function Catalog({items, itemExpanded, buyFn, categories, catChangeFn, itemClickFn}) {
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
            <li key={item.id}>??? {item.id}: {item.desc}</li>
          ))
        }
      </ul>
    </div>
  );
}

/* ??? L8TR ABOVE
    <ItemRow key={item.id}
    item={item}
    itemExpanded={itemExpanded}
    buyClickedFn={() => buyFn(item)}
    clickFn={() => itemClickFn(item)}/>
  */

// ??? define expected props
// ? Catalog.propTypes = {
// ?   filter:   PropTypes.string.isRequired,
// ?   children: PropTypes.node.isRequired,
// ? }

export default Catalog;
