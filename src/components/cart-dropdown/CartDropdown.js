import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import Button from '../button/Button';
import CartItem from '../cart-item/CartItem';

import { selectCartItems } from '../../redux/selectors/cartSelectors';
import { toggleCartDropdown } from '../../redux/actions/cartActions';

const CartDropdownContainer = styled.div`
   position: absolute;
   width: 240px;
   height: 340px;
   display: flex;
   flex-direction: column;
   padding: 20px;
   border: 1px solid black;
   background-color: white;
   top: 90px;
   right: 40px;
   z-index: 5;
`;

const CartItemsContainer = styled.div`
   height: 240px;
   display: flex;
   flex-direction: column;
   overflow: scroll;
`;

const EmptyMessageContainer = styled.span`
   font-size: 18px;
   margin: 50px auto;
`;

const CartDropdownButton = styled(Button)`
   margin-top: auto;
`;

const CartDropdown = ({ cartItems, history, dispatch }) => (
   <CartDropdownContainer>
      <CartItemsContainer>
         {cartItems.length ? (
            cartItems.map(item => <CartItem key={item.id} item={item} />)
         ) : (
            <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
         )}
      </CartItemsContainer>
      <CartDropdownButton
         onClick={() => {
            dispatch(toggleCartDropdown());
            history.push('/checkout');
         }}
      >
         GO TO CHECKOUT
      </CartDropdownButton>
   </CartDropdownContainer>
);

CartDropdown.propTypes = {
   cartItems: PropTypes.array.isRequired,
   history: PropTypes.object.isRequired,
   dispatch: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
   cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
