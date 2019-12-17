import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';

import FormInput from '../form-input/FormInput';
import Button from '../button/Button';

import { signUpStart } from '../../redux/actions/userActions';

const SignUpContainer = styled.div`
   width: 48%;
   display: flex;
   flex-direction: column;
   margin-left: 2%;

   @media screen and (max-width: 800px) {
      width: 80%;
      margin-right: 0;
      margin: auto;
   }
`;

const SignUpTitle = styled.h2`
   margin: 10px 0;
`;

const ButtonsContainer = styled.div`
   display: flex;
   justify-content: space-between;

   @media screen and (max-width: 800px) {
      flex-direction: column;
   }
`;

const SignUp = ({ signUpStart }) => {
   const [formData, setFormData] = useState({
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
   });

   const handleChange = e => {
      const { name, value } = e.target;

      setFormData({ ...formData, [name]: value });
   };

   const handleSubmit = e => {
      e.preventDefault();

      const { displayName, email, password, confirmPassword } = formData;

      if (password !== confirmPassword) {
         return alert(`Passwords don't match`);
      }

      signUpStart(email, password, displayName);
   };

   return (
      <SignUpContainer>
         <SignUpTitle>I do not have an account</SignUpTitle>
         <span>Sign up with your email or password</span>
         <form className='sign-up-form' onSubmit={handleSubmit}>
            <FormInput
               type='text'
               name='displayName'
               value={formData.displayName}
               handleChange={handleChange}
               label='Display Name'
               required
            />
            <FormInput
               type='email'
               name='email'
               value={formData.email}
               handleChange={handleChange}
               label='Email'
               required
            />
            <FormInput
               type='password'
               name='password'
               value={formData.password}
               handleChange={handleChange}
               label='Password'
               required
            />
            <FormInput
               type='password'
               name='confirmPassword'
               value={formData.confirmPassword}
               handleChange={handleChange}
               label='Confirm Password'
               required
            />
            <ButtonsContainer>
               <Button type='submit'>SIGN UP</Button>
            </ButtonsContainer>
         </form>
      </SignUpContainer>
   );
};

SignUp.propTypes = {
   signUpStart: PropTypes.func.isRequired
};

const mapStateToProps = dispatch => ({
   signUpStart: (email, password, displayName) =>
      dispatch(signUpStart({ email, password, displayName }))
});

export default connect(null, mapStateToProps)(SignUp);
