import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';

import { signOutStart } from '../../redux/actions/userActions';
import { selectCurrentUser } from '../../redux/selectors/userSelectors';
import { selectCartHidden } from '../../redux/selectors/cartSelectors';

const HeaderContainer = styled.header`
   height: 70px;
   width: 100%;
   display: flex;
   justify-content: space-between;
   margin-bottom: 25px;

   @media screen and (max-width: 800px) {
      height: 60px;
      padding: 10px;
      margin-bottom: 10px;
   }
`;

const LogoContainer = styled(Link)`
   height: 100%;
   width: 70px;
   padding: 25px;

   @media screen and (max-width: 800px) {
      wifth: 50px;
      padding: 0;
   }
`;

const OptionsContainer = styled.div`
   width: 50%;
   height: 100%;
   display: flex;
   align-items: center;
   justify-content: flex-end;

   @media screen and (max-width: 800px) {
      width: 80%;
   }
`;

const OptionLink = styled(Link)`
   padding: 10px 15px;
   cursor: pointer;
`;

const Header = ({ currentUser, isHidden, signOutStart }) => (
   <HeaderContainer>
      <LogoContainer to='/'>
         <Logo className='logo' />
      </LogoContainer>
      <OptionsContainer>
         <OptionLink to='/shop'>SHOP</OptionLink>
         {currentUser ? (
            <OptionLink as='div' to='' onClick={signOutStart}>
               SIGN OUT
            </OptionLink>
         ) : (
            <OptionLink to='/signin'>SIGN IN</OptionLink>
         )}
         <CartIcon />
      </OptionsContainer>
      {!isHidden && <CartDropdown />}
   </HeaderContainer>
);

Header.propTypes = {
   currentUser: PropTypes.object,
   isHidden: PropTypes.bool.isRequired,
   signOutStart: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
   currentUser: selectCurrentUser,
   isHidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
   signOutStart: () => dispatch(signOutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
