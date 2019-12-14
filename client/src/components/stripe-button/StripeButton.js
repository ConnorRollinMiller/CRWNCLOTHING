import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
   const priceForStripe = price * 100;
   const publishableKey = 'pk_test_Gvj8AynYsHUVlf3ttLbogZGy00FXybITFh';

   const onToken = token => {
      axios({
         url: 'payment',
         method: 'post',
         data: {
            amount: priceForStripe,
            token: token
         }
      })
         .then(res => {
            alert('Payment was successful');
         })
         .catch(error => {
            console.log('Payment error: ', error.response);
            alert(
               'There was an issue with your payment. Make sure you use the provided credit card.'
            );
         });
   };

   return (
      <StripeCheckout
         label='Pay Now'
         name='CRWN Clothing'
         image='https://svgshare.com/i/CUz.svg'
         description={`Your total is $${price}`}
         amount={priceForStripe}
         panelLabel='Pay Now'
         token={onToken}
         stripeKey={publishableKey}
         billingAddress
         shippingAddress
      />
   );
};

StripeButton.propTypes = {
   price: PropTypes.number.isRequired
};

export default StripeButton;
