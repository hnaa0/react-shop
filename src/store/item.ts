import { createSlice } from "@reduxjs/toolkit";

const itemStore = createSlice({
  name: "items",
  initialState: {
    all: [],
    accessory: [],
    digital: [],
    fashion: [],
  },
  reducers: {
    fetchAll(state, action) {
      state.all = action.payload.data;
    },
    fetchAccessory(state, action) {
      state.accessory = action.payload.data;
    },
    fetchDigital(state, action) {
      state.digital = action.payload.data;
    },
    fetchFashion(state, action) {
      state.fashion = action.payload.data;
    },
  },
});

export default itemStore;
