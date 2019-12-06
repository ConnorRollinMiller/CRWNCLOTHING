import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionsOverview from '../../components/collections-overview/CollectionsOverview';
import CollectionPage from '../collection/CollectionPage';
import WithSpinner from '../../components/WithSpinner/WithSpinner';

import { updateCollections } from '../../redux/actions/shopActions';

import {
   firestore,
   convertCollectionsSnapshotToMap
} from '../../firebase/utils';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = ({ match, updateCollections }) => {
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      let unsubscribeFromSnapshop = null;

      const collectionRef = firestore.collection('collections');

      unsubscribeFromSnapshop = collectionRef.onSnapshot(async snapshot => {
         const collectionsMap = convertCollectionsSnapshotToMap(snapshot);

         updateCollections(collectionsMap);
         setIsLoading(false);
      });

      return () => {
         unsubscribeFromSnapshop();
      };
   }, [updateCollections]);

   return (
      <main className='shop-page'>
         <Route
            exact
            path={`${match.path}`}
            render={props => (
               <CollectionsOverviewWithSpinner
                  isLoading={isLoading}
                  {...props}
               />
            )}
         />
         <Route
            path={`${match.path}/:collectionId`}
            render={props => (
               <CollectionPageWithSpinner isLoading={isLoading} {...props} />
            )}
         />
      </main>
   );
};

ShopPage.propTypes = {
   match: PropTypes.object.isRequired,
   updateCollections: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
   updateCollections: collectionsMap =>
      dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);
