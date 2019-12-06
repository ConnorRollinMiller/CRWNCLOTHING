import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { selectCollection } from '../../redux/selectors/shopSelectors';
import CollectionItem from '../../components/collection-item/CollectionItem';

import './CollectionPage.scss';

const CollectionPage = ({ collection }) => {
   const { title, items } = collection;

   return (
      <div className='collection-page'>
         <h2 className='title'>{title}</h2>
         <div className='items'>
            {items.map(item => (
               <CollectionItem key={item.id} item={item} />
            ))}
         </div>
      </div>
   );
};

CollectionPage.propTypes = {
   collection: PropTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) => ({
   collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
