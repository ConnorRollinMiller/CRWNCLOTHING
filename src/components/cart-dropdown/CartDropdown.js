import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import Button from '../button/Button';
import CartItem from '../cart-item/CartItem';

import { selectCartItems } from '../../redux/selectors/cartSelectors';
import { toggleCartDropdown } from '../../redux/actions/cartActions';

import './CartDropdown.scss';

const CartDropdown = ({ cartItems, history, dispatch }) => (
   <div className='cart-dropdown'>
      <div className='cart-items'>
         {cartItems.length ? (
            cartItems.map(item => <CartItem key={item.id} item={item} />)
         ) : (
            <span className='empty-message'>Your cart is empty</span>
         )}
      </div>
      <Button
         onClick={() => {
            dispatch(toggleCartDropdown());
            history.push('/checkout');
         }}
      >
         GO TO CHECKOUT
      </Button>
   </div>
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
