import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Header from './components/header/Header';
import HomePage from './pages/home/HomePage';
import ShopPage from './pages/shop/ShopPage';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/SignInAndSignUpPage';
import CheckoutPage from './pages/checkout/CheckoutPage';

import { checkUserSession } from './redux/actions/userActions';
import { selectCurrentUser } from './redux/selectors/userSelectors';

import { GlobalStyles } from './globalStyles';

const App = ({ currentUser, checkUserSession }) => {
   useEffect(() => {
      checkUserSession();
   }, [checkUserSession]);

   return (
      <React.Fragment>
         <GlobalStyles />
         <Header />
         <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route exact path='/checkout' component={CheckoutPage} />
            <Route
               exact
               path='/signin'
               render={() =>
                  currentUser ? <Redirect to='/' /> : <SignInAndSignUpPage />
               }
            />
         </Switch>
      </React.Fragment>
   );
};

App.propTypes = {
   checkUserSession: PropTypes.func.isRequired,
   currentUser: PropTypes.object
};

const mapStateToProps = createStructuredSelector({
   currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
   checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
