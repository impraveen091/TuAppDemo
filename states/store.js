// import { configureStore, applyMiddleware } from "redux";
// import reducers from "./reducers/index";
// import thunk from "redux-thunk";

// export const store = configureStore(reducers, {}, applyMiddleware(thunk));
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/index";
import thunk from "redux-thunk";

export const store = configureStore({
reducer: rootReducer,
middleware: [thunk],
});