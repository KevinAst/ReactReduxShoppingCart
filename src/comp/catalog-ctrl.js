'use strict';

import React from 'react'; // ??? needed?
import { connect } from 'react-redux'
import Catalog from './catalog';

const mapStateToProps = (reduxAppState, ownProps) => {
  return {
    items: reduxAppState.catalog.items,
  }
}

const mapDispatchToProps = (reduxDispatch, ownProps) => {
  return {
// ? onClick: () => {
// ?   reduxDispatch(setVisibilityFilter(ownProps.filter))
// ? }
  }
}

const CatalogCtrl = connect(mapStateToProps, mapDispatchToProps)(Catalog)
// NOTE: This automatically renders a single sub component <Catalog> with the props defined above
//        ex:      <CatalogCtrl/>
//        renders: <Catalog prop1=xxx onClick=xxx/>

// ??? define expected props
// ? CatalogCtrl.propTypes = {
// ?   filter:   PropTypes.string.isRequired,
// ?   children: PropTypes.node.isRequired,
// ? }

export default CatalogCtrl;
