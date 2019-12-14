import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';

import {
   clearItemFromCart,
   addItem,
   removeItem
} from '../../redux/actions/cartActions';

const CheckoutItemContainer = styled.div`
   width: 100%;
   display: flex;
   min-height: 100px;
   border-bottom: 1px solid darkgrey;
   padding: 15px 0;
   font-size: 20px;
   align-items: center;
   text-align: center;
`;

const ImageContainer = styled.div`
   width: 20%;
   img {
      width: 100%;
      height: 100%;
   }
`;

const TextContainer = styled.span`
   width: 20%;
`;

const QuantityContainer = styled(TextContainer)`
   display: flex;
   justify-content: center;

   div {
      cursor: pointer;
   }

   span {
      margin: 0 10px;
   }
`;

const RemoveButtonContainer = styled.div`
   width: 20%;
   cursor: pointer;
   display: flex;
   justify-content: center;
`;

const CheckoutItem = ({ cartItem, removeItem, addItem, clearItem }) => {
   const { name, imageUrl, price, quantity } = cartItem;

   return (
      <CheckoutItemContainer>
         <ImageContainer>
            <img src={imageUrl} alt='item' />
         </ImageContainer>
         <TextContainer>{name}</TextContainer>
         <QuantityContainer>
            <div onClick={() => removeItem(cartItem)}>&#10094;</div>
            <span>{quantity}</span>
            <div onClick={() => addItem(cartItem)}>&#10095;</div>
         </QuantityContainer>
         <TextContainer>${price}</TextContainer>
         <RemoveButtonContainer onClick={() => clearItem(cartItem)}>
            &#10005;
         </RemoveButtonContainer>
      </CheckoutItemContainer>
   );
};

CheckoutItem.propTypes = {
   cartItem: PropTypes.object.isRequired,
   clearItem: PropTypes.func.isRequired,
   addItem: PropTypes.func.isRequired,
   removeItem: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
   clearItem: cartItem => dispatch(clearItemFromCart(cartItem)),
   addItem: cartItem => dispatch(addItem(cartItem)),
   removeItem: cartItem => dispatch(removeItem(cartItem))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
