'use strict';

import { connect } from 'react-redux'
import Catalog from './catalog';
import * as AC from '../state/actionCreators' // AC: Action Creators

const mapStateToProps = (reduxAppState, ownProps) => {
  return {
    items:        reduxAppState.catalog.items,
    itemExpanded: reduxAppState.catalog.itemExpanded,
  }
}

const mapDispatchToProps = (reduxDispatch, ownProps) => {
  return {
    itemClicked: (item) => { reduxDispatch(AC.toggleItemDetail(item)) },
  }
}

const CatalogCtrl = connect(mapStateToProps, mapDispatchToProps)(Catalog)
// NOTE: This automatically renders a single sub-component <Catalog> with the props defined above
//        ex:      <CatalogCtrl/>
//        renders: <Catalog prop1=xxx onClick=xxx/>

// define expected props
CatalogCtrl.propTypes = {
}

export default CatalogCtrl;
