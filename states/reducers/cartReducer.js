// import * as actions from "../actionTypes/actionTypes";

// const reducer = (state = [], action) => {
//   let done = false;
//   switch (action.type) {
//     case actions.CART_ADD:
//       state.map((item, index) => {
//         if (item._id === action.payload._id) {
//           done = true;
//           if (item.avaiableQuantity > item.quantity) {
//             state[index].quantity = state[index].quantity + 1;
//           } else {
//             console.log("out of stock");
//           }

//           return state;
//         }
//       });
//       if (!done) {
//         return [
//           ...state,
//           {
//             _id: action.payload._id,
//             category: action.payload.category,
//             createdAt: action.payload.createdAt,
//             description: action.payload.description,
//             image: action.payload.image,
//             price: action.payload.price,
//             sku: action.payload.sku,
//             title: action.payload.title,
//             updatedAt: action.payload.updatedAt,
//             avaiableQuantity: action.payload.quantity,
//             quantity: 1,
//           },
//         ];
//       }

//     case actions.CART_REMOVE:
//       return state.filter((item) => item._id !== action.payload);

//     case actions.INCREASE_CART_ITEM_QUANTITY:
//       if (action.payload.type === "increase") {
//         state.map((item, index) => {
//           if (item._id === action.payload.id) {
//             return (state[index].quantity = state[index].quantity + 1);
//           }
//         });
//       }

//     case actions.DECREASE_CART_ITEM_QUANTITY:
//       if (action.payload.type === "decrease") {
//         state.map((item, index) => {
//           if (item._id === action.payload.id) {
//             return (state[index].quantity = state[index].quantity - 1);
//           }
//         });
//       }
//     case actions.EMPTY_CART:
//       if (action.payload === "empty") {
//         state.splice(0, state.length);
//         return state;
//       }

//     default:
//       return state;
//   }
// };

// export default reducer;
import { createReducer } from "@reduxjs/toolkit";
import {
  addCartItem,
  removeCartItem,
  increaseCartItemQuantity,
  decreaseCartItemQuantity,
  emptyCart,
} from "../actionCreaters/actionCreaters";

const initialState = [];

const cartReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addCartItem, (state, action) => {
      const existingItem = state.find(
        (item) => item._id === action.payload._id
      );
      if (existingItem) {
        console.log("check");
        if (existingItem.avaiableQuantity > existingItem.quantity) {
          existingItem.quantity += 1;
        } else {
          console.log("out of stock");
        }
      } else {
        console.log("check else")
        state.push({
          _id: action.payload._id,
          // category: action.payload.category,
          // createdAt: action.payload.createdAt,
          description: action.payload.description,
          image: action.payload.image,
          sale_price: action.payload.sale_price,
          regular_price: action.payload.regular_price,
          sku: action.payload.sku,
          title: action.payload.title,
          updatedAt: action.payload.updatedAt,
          availableQuantity: action.payload.availableQuantity,
          //is this the right way to update quantity
          //availableQuantity: action.payload.availableQuantity- action.payload.quantity,
          quantity: 1,
        });
      }
    })
    .addCase(removeCartItem, (state, action) => {
      return state.filter((item) => item._id !== action.payload);
    })
    .addCase(increaseCartItemQuantity, (state, action) => {
      const item = state.find((item) => item._id === action.payload.id);
      if (item && action.payload.type === "increase") {
       //check for available quantity
        item.quantity += 1;
      }
    })
    .addCase(decreaseCartItemQuantity, (state, action) => {
      const item = state.find((item) => item._id === action.payload.id);
      if (item && action.payload.type === "decrease") {

        if (item.quantity === 1) {
          // Remove the item when quantity reaches 1
          state.splice(state.indexOf(item), 1);
        } else {
          item.quantity -= 1;
        }
      }
    })
    .addCase(emptyCart, (state, action) => {
      if (action.payload === "empty") {
        state.splice(0, state.length);
      }
    });
});

export default cartReducer;
