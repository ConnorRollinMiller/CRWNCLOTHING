import React from 'react';
import styled from 'styled-components';

import SignIn from '../../components/sign-in/SignIn';
import SignUp from '../../components/sign-up/SignUp';

const SignInAndSignUpContainer = styled.main`
   display: flex;
   justify-content: space-between;
   margin: 30px 0;

   @media screen and (max-width: 800px) {
      flex-direction: column;
      width: unset;
      align-items: center;

      > *:first-child {
         margin-bottom: 50px;
      }
   }
`;
const SignInAndSignUp = () => (
   <SignInAndSignUpContainer>
      <SignIn />
      <SignUp />
   </SignInAndSignUpContainer>
);

export default SignInAndSignUp;
