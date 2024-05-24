// import { combineReducers } from "redux";
// import cartReducer from "../reducers/cartReducer";

// const reducers = combineReducers({
//   product: cartReducer,
// });

// export default reducers;
import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import productReducer from "./productReducer";
const rootReducer = combineReducers({
cart: cartReducer,
product:productReducer,

});

export default rootReducer;