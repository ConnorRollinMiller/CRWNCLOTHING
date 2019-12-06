import React from 'react';
import styled from 'styled-components';

import Directory from '../../components/directory/Directory';

const HomePageContainer = styled.main`
   display: flex;
   flex-direction: column;
   align-items: center;
   padding: 20px 80px;
`;

const HomePage = () => {
   return (
      <HomePageContainer>
         <Directory />
      </HomePageContainer>
   );
};

export default HomePage;
