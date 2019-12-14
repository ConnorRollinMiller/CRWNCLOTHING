import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../collection-preview/CollectionPreview';
import { selectCollectionsForPreview } from '../../redux/selectors/shopSelectors';

const CollectionsOverviewContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: stretch;
`;

const CollectionsOverview = ({ collections }) => (
   <CollectionsOverviewContainer>
      {collections.map(({ id, ...collectionProps }) => (
         <CollectionPreview key={id} {...collectionProps} />
      ))}
   </CollectionsOverviewContainer>
);

CollectionsOverview.propTypes = {
   collections: PropTypes.array.isRequired
};

const mapStateToProps = createStructuredSelector({
   collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);
