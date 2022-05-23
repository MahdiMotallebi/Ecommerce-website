import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

const URL = "http://localhost:5000/products/";

export const fetchProducts = createAsyncThunk(
  "shopClothing/fetchProducts",
  async () => {
    const res = await axios.get(URL);
    return res.data;
  }
);

export const changeLike = createAsyncThunk(
  "shopClothing/changeLike",
  async (updateItem) => {
    const { item, data } = updateItem;
    const res = await axios.put(URL + item.id, { ...item, ...data });
    return res.data;
  }
);

export const changeCount = createAsyncThunk(
  "shopClothing/changeCount",
  async (updateItem) => {
    const { item, data } = updateItem;

    const res = await axios.put(URL + item.id, { ...item, ...data });
    return res.data;
  }
);

const initialState = {
  items: [],
  filterItems: [],
  cartItems: [],
  likeItems: [],
  loading: "",
  error: "",
};

const clothingSlice = createSlice({
  name: "shopClothing",
  initialState,
  reducers: {
    handleFilterBySize: (state, action) => {
      state.filterItems = [...state.items];
      if (action.payload.toLowerCase() !== "all") {
        let filterArray = state.items.filter((item) =>
          item.availableSizes.includes(action.payload)
        );

        state.filterItems = [...filterArray];
      }
    },

    handleFilterBySort: (state, action) => {
      state.filterItems.sort((a, b) => {
        if (action.payload.toLowerCase() === "ascending") {
          if (a.price > b.price) return 1;
          return -1;
        } else if (action.payload.toLowerCase() === "descending") {
          if (a.price < b.price) return 1;
          return -1;
        } else {
          if (a.id > b.id) return 1;
          return -1;
        }
      });
    },
  },
  extraReducers: {
    // Section fetch data
    [fetchProducts.pending]: (state, action) => {
      state.loading = "loading";
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.loading = "succeeded";
      state.items = [...action.payload];
      state.filterItems = [...action.payload];

      const tempLike = state.items.filter((item) => item.isLike === true);
      state.likeItems = [...tempLike];

      const tempCart = state.items.filter((item) => item.count > 0);
      state.cartItems = [...tempCart];
    },
    [fetchProducts.rejected]: (state, action) => {
      state.loading = "faild";
      state.error = action.error.message;
    },

    // Section like items
    [changeLike.fulfilled]: (state, action) => {
      state.loading = "succeeded";
      if (action.payload.isLike) {
        state.likeItems.push(action.payload);
      } else {
        const newCartItems = state.likeItems.filter(
          (item) => item.id !== action.payload.id
        );

        state.likeItems = [...newCartItems];
      }

      const index = state.filterItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.filterItems[index]) state.filterItems[index] = action.payload;

      const index1 = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.items[index1]) state.items[index1] = action.payload;
    },

    // Section cart items
    [changeCount.fulfilled]: (state, action) => {
      if (action.payload.count === 0) {
        const tempCartItem = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );
        state.cartItems = [...tempCartItem];
      }

      if (action.payload.count >= 1) {
        const inCart = state.cartItems.some(
          (item) => item.id === action.payload.id
        );

        if (inCart) {
          const index = state.cartItems.findIndex(
            (item) => item.id === action.payload.id
          );
          if (state.cartItems[index]) state.cartItems[index] = action.payload;
        } else {
          state.cartItems.push(action.payload);
        }
      }

      const index = state.filterItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.filterItems[index]) state.filterItems[index] = action.payload;
      const index1 = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.items[index1]) state.items[index1] = action.payload;
    },
  },
});

export const allState = (state) => state.clothingSlice;
export const {
  handleCart,
  handleLike,
  handleDeleteItem,
  handle_Increase_Decrease,
  handleFilterBySize,
  handleFilterBySort,
  handleDeleteLikeItem,
} = clothingSlice.actions;
export default clothingSlice.reducer;
