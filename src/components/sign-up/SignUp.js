import React, { useState } from 'react';
import styled from 'styled-components';

import FormInput from '../form-input/FormInput';
import Button from '../button/Button';

import { auth, createUserProfileDocument } from '../../firebase/utils';

const SignUpContainer = styled.div`
   display: flex;
   flex-direction: column;
   width: 380px;
`;

const SignUpTitle = styled.h2`
   margin: 10px 0;
`;

const SignUp = () => {
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

   const handleSubmit = async e => {
      e.preventDefault();
      const { displayName, email, password, confirmPassword } = formData;

      if (password !== confirmPassword) {
         alert(`Passwords don't match`);
         return;
      }

      try {
         const { user } = await auth.createUserWithEmailAndPassword(
            email,
            password
         );

         await createUserProfileDocument(user, { displayName: displayName });

         setFormData({
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
         });
      } catch (err) {
         console.error(err);
      }
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
            <Button type='submit'>SIGN UP</Button>
         </form>
      </SignUpContainer>
   );
};

export default SignUp;
