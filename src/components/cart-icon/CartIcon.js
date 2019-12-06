import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as ShoppingIconSVG } from '../../assets/shopping-bag.svg';

import { toggleCartDropdown } from '../../redux/actions/cartActions';
import { selectCartItemsCount } from '../../redux/selectors/cartSelectors';

const CartIconContainer = styled.div`
   width: 45px;
   height: 45px;
   position: relative;
   display: flex;
   align-items: center;
   justify-content: center;
   cursor: pointer;
`;

const ShoppingIcon = styled(ShoppingIconSVG)`
   width: 24px;
   height: 24px;
`;

const ItemCountContainer = styled.span`
   position: absolute;
   font-size: 10px;
   font-weight: bold;
   bottom: 12px;
`;

const CartIcon = ({ toggleCartDropdown, itemCount }) => (
   <CartIconContainer onClick={toggleCartDropdown}>
      <ShoppingIcon />
      <ItemCountContainer>{itemCount}</ItemCountContainer>
   </CartIconContainer>
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
