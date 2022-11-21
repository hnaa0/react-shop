import { createSlice } from "@reduxjs/toolkit";

export interface CartItemsType {
  id: number;
  count: number;
  price: number;
  title: string;
  image: string;
}

const cartStore = createSlice({
  name: "cart",
  initialState: {
    items: {} as CartItemsType,
    totalCount: 0,
  },
  reducers: {
    addCartItem(state: any, action: any) {
      if (state.items[action.payload.id]) {
        state.items[action.payload.id].count++;
      } else {
        state.items[action.payload.id] = {
          id: action.payload.id,
          count: 1,
        };
      }
      state.totalCount++;
    },
    removeCartItem(state: any, action: any) {
      state.items[action.payload.id].count--;
      state.totalCount--;
      if (state.items[action.payload.id].count === 0)
        delete state.items[action.payload.id];
    },
    buyCartItem(state: any) {
      state.items = {};
      state.totalCount = 0;
    },
  },
});

export const cartActions = cartStore.actions;
export default cartStore;
