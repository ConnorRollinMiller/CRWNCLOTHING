import React, { useState } from 'react';

import FormInput from '../form-input/FormInput';
import Button from '../button/Button';

import { auth, signInWithGoogle } from '../../firebase/utils';

import './SignIn.scss';

const SignIn = () => {
   const [formData, setFormData] = useState({ email: '', password: '' });

   const handleChange = e => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
   };

   const handleSubmit = e => {
      e.preventDefault();

      const { email, password } = formData;

      try {
         auth.signInWithEmailAndPassword(email, password);

         setFormData({ email: '', password: '' });
      } catch (err) {
         console.error(err.message);
      }
   };

   return (
      <div className='sign-in'>
         <h2>I already have an account</h2>
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
            <div className='buttons'>
               <Button type='submit'>Sign in</Button>
               <Button onClick={signInWithGoogle} isGoogleSignIn>
                  Sign in with Google
               </Button>
            </div>
         </form>
      </div>
   );
};

export default SignIn;
