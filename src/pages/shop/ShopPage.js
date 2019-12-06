import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/CollectionsOverview';
import CollectionPage from '../collection/CollectionPage';

const ShopPage = ({ match }) => (
   <div className='shop-page'>
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
   </div>
);

ShopPage.propTypes = {
   match: PropTypes.object.isRequired
};

export default ShopPage;