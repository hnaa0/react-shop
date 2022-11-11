import { configureStore } from "@reduxjs/toolkit";
import itemStore from "./store/item";
import cartStore from "./store/cart";

const store = configureStore({
  reducer: {
    itemStore: itemStore.reducer,
    cartStore: cartStore.reducer,
  },
});

export default store;
