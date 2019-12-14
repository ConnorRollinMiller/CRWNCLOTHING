import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

import CollectionItem from '../collection-item/CollectionItem';

const CollectionPreviewContainer = styled.div`
   display: flex;
   flex-direction: column;
   margin-bottom: 30px;
`;

const TitleContainer = styled.h1`
   font-size: 28px;
   margin-bottom: 25px;
   text-transform: uppercase;

   &:hover {
      color: grey;
      cursor: pointer;
   }
`;

const PreviewContainer = styled.div`
   display: flex;
   justify-content: space-between;
`;

const CollectionPreview = ({ title, items, history, match, routeName }) => {
   return (
      <CollectionPreviewContainer>
         <TitleContainer
            onClick={() => history.push(`${match.path}/${routeName}`)}
         >
            {title}
         </TitleContainer>
         <PreviewContainer>
            {items
               .filter((item, idx) => idx < 4)
               .map(item => (
                  <CollectionItem key={item.id} item={item} />
               ))}
         </PreviewContainer>
      </CollectionPreviewContainer>
   );
};

CollectionPreview.propTypes = {
   title: PropTypes.string.isRequired,
   items: PropTypes.array.isRequired
};

export default withRouter(CollectionPreview);
