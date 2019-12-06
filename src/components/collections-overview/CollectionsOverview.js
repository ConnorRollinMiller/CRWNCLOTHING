import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../collection-preview/CollectionPreview';
import { selectCollectionsForPreview } from '../../redux/selectors/shopSelectors';

import './CollectionsOverview.scss';

const CollectionsOverview = ({ collections }) => (
   <div className='collection-overview'>
      {collections.map(({ id, ...collectionProps }) => (
         <CollectionPreview key={id} {...collectionProps} />
      ))}
   </div>
);

CollectionsOverview.propTypes = {
   collections: PropTypes.array.isRequired
};

const mapStateToProps = createStructuredSelector({
   collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);
