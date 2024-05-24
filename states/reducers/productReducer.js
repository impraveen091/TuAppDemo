// import { FETCH_PRODUCTS } from '../actions/types';const initialState = {
//     items: []
// };
// export default function(state = initialState, action) {
//     switch(action.type){
//         case FETCH_PRODUCTS:
//             return {
//                 ...state,
//                 items:action.payload
//             }
//         default:
//             return state
//     }
// }

import { createReducer } from "@reduxjs/toolkit";
import {
    fetchproducts,
  } from "../actionCreaters/actionCreaters";

const initialState = [];

const productReducer = createReducer(initialState, (builder) => {
  builder.addCase(fetchproducts, (state, action) => {
    return action.payload;
  });
});

export default productReducer;