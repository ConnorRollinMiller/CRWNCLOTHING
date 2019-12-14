import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';

import FormInput from '../form-input/FormInput';
import Button from '../button/Button';

import {
   googleSignInStart,
   emailSignInStart
} from '../../redux/actions/userActions';

const SignInContainer = styled.div`
   width: 48%;
   margin-right: 2%;
   display: flex;
   flex-direction: column;
`;

const ButtonsContainer = styled.div`
   display: flex;
   justify-content: space-between;
`;

const SignInTitle = styled.h2`
   margin: 10px 0;
`;

const SignIn = ({ googleSignInStart, emailSignInStart }) => {
   const [formData, setFormData] = useState({ email: '', password: '' });

   const handleChange = e => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
   };

   const handleSubmit = async e => {
      e.preventDefault();

      const { email, password } = formData;

      emailSignInStart(email, password);

      setFormData({ email: '', password: '' });
   };

   return (
      <SignInContainer>
         <SignInTitle>I already have an account</SignInTitle>
         <span>Sign in with your email & password</span>
         <form onSubmit={handleSubmit}>
            <FormInput
               label='Email'
               name='email'
               type='email'
               value={formData.email}
               handleChange={handleChange}
               required
            />
            <FormInput
               label='Password'
               name='password'
               type='password'
               value={formData.password}
               handleChange={handleChange}
               required
            />
            <ButtonsContainer>
               <Button type='submit'>Sign in</Button>
               <Button type='button' onClick={googleSignInStart} isGoogleSignIn>
                  Sign in with Google
               </Button>
            </ButtonsContainer>
         </form>
      </SignInContainer>
   );
};

SignIn.propTypes = {
   googleSignInStart: PropTypes.func.isRequired,
   emailSignInStart: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
   googleSignInStart: () => dispatch(googleSignInStart()),
   emailSignInStart: (email, password) =>
      dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);
