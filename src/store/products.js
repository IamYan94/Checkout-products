import { createSlice } from "@reduxjs/toolkit";
import mocked_products from "../mocked_data/mocked_products";

const initialState = mocked_products;

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    
  }
});

export default productsSlice.reducer;
