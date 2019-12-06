import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/checkout-item/CheckoutItem';
import StripeButton from '../../components/stripe-button/StripeButton';

import {
   selectCartItems,
   selectCartTotal
} from '../../redux/selectors/cartSelectors';

const CheckoutPageContainer = styled.main`
   width: 55%;
   min-height: 90vh;
   display: flex;
   flex-direction: column;
   align-items: center;
   margin: 50px auto 0;

   button {
      margin-left: auto;
      margin-top: 50px;
   }
`;

const CheckoutHeaderContainer = styled.div`
   width: 100%;
   padding: 10px 0;
   display: flex;
   justify-content: space-between;
   border-bottom: 1px solid darkgrey;
`;

const CheckoutHeaderBlockContainer = styled.div`
   text-transform: capitalize;
   width: 23%;

   &:last-child {
      width: 8%;
   }
`;

const TotalContainer = styled.div`
   margin-top: 30px;
   margin-left: auto;
   font-size: 36px;
`;

const WarningContainer = styled.div`
   text-align: center;
   margin-top: 40px;
   font-size: 24px;
   color: red;
`;

const CheckoutPage = ({ cartItems, total }) => (
   <CheckoutPageContainer>
      <CheckoutHeaderContainer>
         <CheckoutHeaderBlockContainer>
            <span>Product</span>
         </CheckoutHeaderBlockContainer>
         <CheckoutHeaderBlockContainer>
            <span>Description</span>
         </CheckoutHeaderBlockContainer>
         <CheckoutHeaderBlockContainer>
            <span>Quantity</span>
         </CheckoutHeaderBlockContainer>
         <CheckoutHeaderBlockContainer>
            <span>Price</span>
         </CheckoutHeaderBlockContainer>
         <CheckoutHeaderBlockContainer>
            <span>Remove</span>
         </CheckoutHeaderBlockContainer>
      </CheckoutHeaderContainer>
      {cartItems.map(cartItem => (
         <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <TotalContainer>
         <span>TOTAL: ${total}</span>
      </TotalContainer>
      <WarningContainer>
         *Please use the following test credit card for payments*
         <br />
         4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
      </WarningContainer>
      <StripeButton price={total} />
   </CheckoutPageContainer>
);

CheckoutPage.propTypes = {
   cartItems: PropTypes.array.isRequired,
   total: PropTypes.number.isRequired
};

const mapStateToProps = createStructuredSelector({
   cartItems: selectCartItems,
   total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);
