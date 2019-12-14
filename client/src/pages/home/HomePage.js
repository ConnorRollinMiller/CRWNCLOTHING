import React from 'react';
import styled from 'styled-components';

import Directory from '../../components/directory/Directory';

const HomePageContainer = styled.main`
   display: flex;
   flex-direction: column;
   align-items: center;
   padding: 20px 0px;
`;

const HomePage = () => (
   <HomePageContainer>
      <Directory />
   </HomePageContainer>
);

export default HomePage;
