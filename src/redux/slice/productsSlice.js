

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import service from "../../api/service";
import { Category } from "@mui/icons-material";

export const fetchProductsByCategory = createAsyncThunk(
  "products/fetchProductsByCategory",
  async ({id, name}) => {
    
    const { data } = await service.getCategoryById(id);
    console.log(data, "---data---");
    const response = {
      data,
      name
    }
    return response;
  }
);

export const fetchProductById = createAsyncThunk(
  "product/fetchProductById",
  async (id) => {
    const { data } = await service.getProductById(id);
    return data;
  }
)

const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    item: {},
    CategoryName: "",
    isError: "",
    isLoading: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsByCategory.pending, (state) => {
        state.isLoading = "Loading...";
        
      })
      .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
        state.isLoading = "Success";
        state.items = action.payload.data;
        state.CategoryName = action.payload.name
      })
      .addCase(fetchProductsByCategory.rejected, (state,action) => {
        state.isLoading = "Failed";
        state.isError = action.payload;
      })
      .addCase(fetchProductById.fulfilled, (state, {payload}) => {
        state.item = payload;
      })
  }
});

export const productsReducer = productsSlice.reducer;
