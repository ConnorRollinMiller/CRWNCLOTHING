import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CartItemContainer = styled.div`
   width: 100%;
   display: flex;
   height: 80px;
   margin-bottom: 15px;

   img {
      width: 30%;
   }
`;

const ItemDetailsContainer = styled.div`
   width: 70%;
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   justify-content: center;
   padding: 10px 20px;
`;

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
   <CartItemContainer>
      <img src={imageUrl} alt='item' />
      <ItemDetailsContainer>
         <span>{name}</span>
         <span>
            {quantity} X {price}
         </span>
      </ItemDetailsContainer>
   </CartItemContainer>
);

CartItem.propTypes = {
   item: PropTypes.object.isRequired
};

export default React.memo(CartItem);
