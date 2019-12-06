import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';

import { logoutUser } from '../../redux/actions/userActions';
import { selectCurrentUser } from '../../redux/selectors/userSelectors';
import { selectCartHidden } from '../../redux/selectors/cartSelectors';

import './Header.scss';

const Header = ({ currentUser, isHidden }) => {
   const handleLogout = e => {
      e.preventDefault();

      logoutUser();
   };

   return (
      <header className='header'>
         <Link className='logo-container' to='/'>
            <Logo className='logo' />
         </Link>
         <div className='options'>
            <Link className='option' to='/shop'>
               SHOP
            </Link>
            <Link className='option' to='/contact'>
               CONTACT
            </Link>
            {currentUser ? (
               <div className='option' onClick={handleLogout}>
                  SIGN OUT
               </div>
            ) : (
               <Link className='option' to='/signin'>
                  SIGN IN
               </Link>
            )}
            <CartIcon />
         </div>
         {!isHidden && <CartDropdown />}
      </header>
   );
};

Header.propTypes = {
   currentUser: PropTypes.object,
   isHidden: PropTypes.bool.isRequired
};

const mapStateToProps = createStructuredSelector({
   currentUser: selectCurrentUser,
   isHidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
   logoutUser: () => dispatch(logoutUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
