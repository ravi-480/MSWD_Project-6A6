import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { BaseURL } from "../../../utils/baseUrl";
// import axios from "axios";

import * as api from "../../api";
const initialState = {
  cartItems: [],
  cartItem: {},
  isLoading: true,
  isError: false,
  message: "",
};

export const fetchCartItems = createAsyncThunk("cart/getCart", async () => {
  try {
    const response = await api.getCartItems();
    return response?.data;
  } catch (error) {
    console.error(error);
  }
  // return axios
  //   .get("http://localhost:8080/api/carts")
  //   .then((response) => response?.data?.cart.items);
});

export const removeCartItem = createAsyncThunk(
  "cart/delete",
  async ({ productId, toast }) => {
    try {
      const response = await api.removeCartItem(productId);
      if (response)
        toast("Removed item from Bag", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "colored",
          icon: () => (
            <img
              src={response?.data?.deletedProduct?.productId?.images[0]}
              style={{ height: "30px", width: "30px", objectFit: "center" }}
            />
          ),
        });

      return response?.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const addItemToBag = createAsyncThunk(
  "cart/addToCart",
  async ({ productId, size, toast }) => {
    try {
      const response = await api.addItemToCart({ productId, size });
      console.log("Resposnse from add bag", response);
      if (response)
        toast("Added to bag", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "colored",
          icon: () => (
            <img
              src={response?.data?.productDetails?.images[0]}
              style={{ height: "30px", width: "30px", objectFit: "center" }}
            />
          ),
        });
      return response?.data;
    } catch (error) {
      console.error(error);
    }
    // return axios
    //   .get("http://localhost:8080/api/carts")
    //   .then((response) => response?.data?.cart.items);
  }
);

// export const updateSize = createAsyncThunk();
const cartSlice = createSlice({
  name: "cart",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchCartItems.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCartItems.fulfilled, (state, action) => {
      state.isLoading = false;
      state.cartItems = action.payload;
      state.isError = "";
    });
    builder.addCase(fetchCartItems.rejected, (state, action) => {
      state.isLoading = false;
      state.cartItems = [];
      state.isError = true;
      state.message = action.error.message;
    });

    builder.addCase(removeCartItem.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(removeCartItem.fulfilled, (state, action) => {
      state.isLoading = false;
      state.cartItem = action.payload;
      state.isError = "";
    });
    builder.addCase(removeCartItem.rejected, (state, action) => {
      state.isLoading = false;
      state.cartItem = {};
      state.isError = true;
      state.message = action.error.message;
    });
  },
});

// const cartItemSlice = createSlice({
//   name: "cartItem",
//   initialState,
// });
export default cartSlice.reducer;
