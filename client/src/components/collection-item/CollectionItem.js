import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Button from '../button/Button';

import { addItem } from '../../redux/actions/cartActions';

const CollectionItemContainer = styled.div`
   width: 21vw;
   margin 0.5vw 0;
   display: flex;
   flex-direction: column;
   height: 350px;
   align-items: center;
   position: relative;

   &:hover {
      .image {
         opacity: 0.8;
      }

      button {
         opacity: 0.85;
         display: flex;
      }
   }
`;

const AddButton = styled(Button)`
   width: 80%;
   opacity: 0.7;
   position: absolute;
   top: 255px;
   display: none;
`;

const BackgroundImage = styled.div`
   width: 100%;
   height: 95%;
   background-size: cover;
   background-position: center;
   margin-bottom: 5px;
   background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

const CollectionFooterContainer = styled.div`
   width: 100%;
   height: 5%;
   display: flex;
   justify-content: space-between;
   font-size: 18px;
`;

const NameContainer = styled.span`
   width: 90%;
   margin-bottom: 15px;
`;

const PriceContainer = styled.span`
   width: 10%;
   text-align: right;
`;

const CollectionItem = ({ addItemToCart, item }) => {
   const { name, price, imageUrl } = item;

   return (
      <CollectionItemContainer>
         <BackgroundImage className='image' imageUrl={imageUrl} />
         <CollectionFooterContainer>
            <NameContainer>{name}</NameContainer>
            <PriceContainer>${price}</PriceContainer>
         </CollectionFooterContainer>
         <AddButton inverted onClick={() => addItemToCart(item)}>
            ADD TO CART
         </AddButton>
      </CollectionItemContainer>
   );
};

CollectionItem.propTypes = {
   item: PropTypes.object.isRequired,
   addItemToCart: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
   addItemToCart: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
