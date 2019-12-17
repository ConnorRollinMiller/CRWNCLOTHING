import React, { useEffect, lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Header from './components/header/Header';
import Spinner from './components/spinner/Spinner';
import ErrorBoundary from './components/error-boundary/Errorboundary';

import { checkUserSession } from './redux/actions/userActions';
import { selectCurrentUser } from './redux/selectors/userSelectors';

import { GlobalStyles } from './globalStyles';

const HomePage = lazy(() => import('./pages/home/HomePage'));
const ShopPage = lazy(() => import('./pages/shop/ShopPage'));
const SignInAndSignUpPage = lazy(() =>
   import('./pages/sign-in-and-sign-up/SignInAndSignUpPage')
);
const CheckoutPage = lazy(() => import('./pages/checkout/CheckoutPage'));

const App = ({ currentUser, checkUserSession }) => {
   useEffect(() => {
      checkUserSession();
   }, [checkUserSession]);

   return (
      <React.Fragment>
         <GlobalStyles />
         <Header />
         <Switch>
            <ErrorBoundary>
               <Suspense fallback={<Spinner />}>
                  <Route exact path='/' component={HomePage} />
                  <Route path='/shop' component={ShopPage} />
                  <Route exact path='/checkout' component={CheckoutPage} />
                  <Route
                     exact
                     path='/signin'
                     render={() =>
                        currentUser ? (
                           <Redirect to='/' />
                        ) : (
                           <SignInAndSignUpPage />
                        )
                     }
                  />
               </Suspense>
            </ErrorBoundary>
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
