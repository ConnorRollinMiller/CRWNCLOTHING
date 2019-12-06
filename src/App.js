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

import { auth, createUserProfileDocument } from './firebase/utils';
import { setCurrentUser } from './redux/actions/userActions';
import { selectCurrentUser } from './redux/selectors/userSelectors';

import './App.css';

const App = ({ currentUser, setCurrentUser, collections }) => {
   useEffect(() => {
      let unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
         if (userAuth) {
            const userRef = await createUserProfileDocument(userAuth);

            userRef.onSnapshot(snapShot => {
               setCurrentUser({ id: snapShot.id, ...snapShot.data() });
            });
         }

         setCurrentUser(userAuth);
      });

      return () => {
         unsubscribeFromAuth();
      };
   }, [setCurrentUser]);

   return (
      <React.Fragment>
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
   setCurrentUser: PropTypes.func.isRequired,
   currentUser: PropTypes.object
};

const mapStateToProps = createStructuredSelector({
   currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
   setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
