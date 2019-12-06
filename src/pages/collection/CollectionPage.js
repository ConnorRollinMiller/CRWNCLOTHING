import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { selectCollection } from '../../redux/selectors/shopSelectors';
import CollectionItem from '../../components/collection-item/CollectionItem';

const CollectionPageContainer = styled.main`
   display: flex;
   flex-direction: column;
`;

const CollectionTitle = styled.h2`
   font-size: 38px;
   margin: 0 auto 30px;
`;

const CollectionItemsContainer = styled.div`
   display: grid;
   grid-template-columns: 1fr 1fr 1fr 1fr;
   grid-gap: 10px;

   & > div {
      margin-bottom: 30px;
   }
`;

const CollectionPage = ({ collection }) => {
   const { title, items } = collection;

   return (
      <CollectionPageContainer>
         <CollectionTitle>{title}</CollectionTitle>
         <CollectionItemsContainer>
            {items.map(item => (
               <CollectionItem key={item.id} item={item} />
            ))}
         </CollectionItemsContainer>
      </CollectionPageContainer>
   );
};

CollectionPage.propTypes = {
   collection: PropTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) => ({
   collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
