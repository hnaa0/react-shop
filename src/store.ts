import { configureStore } from "@reduxjs/toolkit";

import itemStore from "./store/item";

const store = configureStore({
  reducer: {
    itemStore: itemStore.reducer,
  },
});

export default store;
