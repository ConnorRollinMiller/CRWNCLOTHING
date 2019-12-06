import React, { useState } from 'react';
import styled from 'styled-components';

import FormInput from '../form-input/FormInput';
import Button from '../button/Button';

import { auth, signInWithGoogle } from '../../firebase/utils';

const SignInContainer = styled.div`
   width: 380px;
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

const SignIn = () => {
   const [formData, setFormData] = useState({ email: '', password: '' });

   const handleChange = e => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
   };

   const handleSubmit = async e => {
      e.preventDefault();

      const { email, password } = formData;

      try {
         await auth.signInWithEmailAndPassword(email, password);

         setFormData({ email: '', password: '' });
      } catch (err) {
         console.error(err.message);
      }
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
               <Button onClick={signInWithGoogle} isGoogleSignIn>
                  Sign in with Google
               </Button>
            </ButtonsContainer>
         </form>
      </SignInContainer>
   );
};

export default SignIn;
