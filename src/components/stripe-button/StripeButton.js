import React from 'react';
import PropTypes from 'prop-types';

import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
   const priceForStripe = price * 100;
   const publishableKey = 'pk_test_Gvj8AynYsHUVlf3ttLbogZGy00FXybITFh';

   const onToken = token => {
      console.log(token);
      alert('Payment Successful');
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
