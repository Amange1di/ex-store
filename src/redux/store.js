import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "./slices/productsSlice";
import { cartReducer } from "./slices/cartSlice";
import { likeReducer } from "./slices/likeSlice";
import { productsAllReducer } from "./slices/allproduct";
import userReducer from './slices/userSlice';
const store = configureStore({
  reducer: {
    products: productsReducer,
    productsAll: productsAllReducer,
    cart: cartReducer,
    like: likeReducer,
    user: userReducer,
  },
});

export default store;