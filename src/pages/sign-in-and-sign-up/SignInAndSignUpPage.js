import React from 'react';
import styled from 'styled-components';

import SignIn from '../../components/sign-in/SignIn';
import SignUp from '../../components/sign-up/SignUp';

const SignInAndSignUpContainer = styled.main`
   width: 850px;
   display: flex;
   justify-content: space-between;
   margin: 30px auto;
`;
const SignInAndSignUp = () => (
   <SignInAndSignUpContainer>
      <SignIn />
      <SignUp />
   </SignInAndSignUpContainer>
);

export default SignInAndSignUp;
