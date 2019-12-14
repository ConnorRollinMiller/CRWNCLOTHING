import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionsOverviewContainer from '../../components/collections-overview/CollectionsOverviewContainer';
import CollectionsPageContainer from '../collection/CollectionsPageContainer';

import { fetchCollectionsStart } from '../../redux/actions/shopActions';

const ShopPage = ({ match, fetchCollectionsStart }) => {
   useEffect(() => {
      fetchCollectionsStart();
   }, [fetchCollectionsStart]);

   return (
      <main className='shop-page'>
         <Route
            exact
            path={`${match.path}`}
            component={CollectionsOverviewContainer}
         />
         <Route
            path={`${match.path}/:collectionId`}
            component={CollectionsPageContainer}
         />
      </main>
   );
};

ShopPage.propTypes = {
   match: PropTypes.object.isRequired,
   fetchCollectionsStart: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
   fetchCollectionsStart: collectionsMap =>
      dispatch(fetchCollectionsStart(collectionsMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);
