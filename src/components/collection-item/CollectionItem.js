import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Button from '../button/Button';

import { addItem } from '../../redux/actions/cartActions';

import './CollectionItem.scss';

const CollectionItem = ({ addItemToCart, item }) => {
   const { name, price, imageUrl } = item;

   return (
      <div className='collection-item'>
         <div
            style={{ backgroundImage: `url(${imageUrl})` }}
            className='image'
         />
         <div className='collection-footer'>
            <span className='name'>{name}</span>
            <span className='price'>${price}</span>
         </div>
         <Button inverted onClick={() => addItemToCart(item)}>
            ADD TO CART
         </Button>
      </div>
   );
};

CollectionItem.propTypes = {
   item: PropTypes.object.isRequired,
   addItemToCart: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
   addItemToCart: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
