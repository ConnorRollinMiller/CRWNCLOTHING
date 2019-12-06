import SHOP_DATA from '../shopData';

const initialState = {
   collections: SHOP_DATA
};

export default (state = initialState, action) => {
   const { type } = action;

   switch (type) {
      default:
         return state;
   }
};
