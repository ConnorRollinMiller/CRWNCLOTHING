import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import { toggleCartDropdown } from '../../redux/actions/cartActions';
import { selectCartItemsCount } from '../../redux/selectors/cartSelectors';

import './CartIcon.scss';

const CartIcon = ({ toggleCartDropdown, itemCount }) => (
   <div className='cart-icon' onClick={toggleCartDropdown}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{itemCount}</span>
   </div>
);

CartIcon.propTypes = {
   toggleCartDropdown: PropTypes.func.isRequired,
   itemCount: PropTypes.number.isRequired
};

const mapStateToProps = createStructuredSelector({
   itemCount: selectCartItemsCount
});

const mapDispatchToProps = dispatch => ({
   toggleCartDropdown: () => dispatch(toggleCartDropdown())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
