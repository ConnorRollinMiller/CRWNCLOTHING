import React, { useEffect, lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Spinner from '../../components/spinner/Spinner';

import { fetchCollectionsStart } from '../../redux/actions/shopActions';

const CollectionsOverviewContainer = lazy(() =>
   import('../../components/collections-overview/CollectionsOverviewContainer')
);
const CollectionsPageContainer = lazy(() =>
   import('../collection/CollectionsPageContainer')
);

const ShopPage = ({ match, fetchCollectionsStart }) => {
   useEffect(() => {
      fetchCollectionsStart();
   }, [fetchCollectionsStart]);

   return (
      <main className='shop-page'>
         <Suspense fallback={<Spinner />}>
            <Route
               exact
               path={`${match.path}`}
               component={CollectionsOverviewContainer}
            />
            <Route
               path={`${match.path}/:collectionId`}
               component={CollectionsPageContainer}
            />
         </Suspense>
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
