import { createSlice } from "@reduxjs/toolkit";

export const imageDataSlice = createSlice({
  name: "images",
  initialState: {
    productImages: [],
  },
  reducers: {
    setProductImages: (state, action) => {
      console.log(action);
      state.productImages = action.payload;
    },
  },
});

export const { setProductImages } = imageDataSlice.actions;
export const selectProductImages = (state) => state.images.productImages;

export default imageDataSlice.reducer;
