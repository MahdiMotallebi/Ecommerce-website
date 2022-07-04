import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

const URL = "http://localhost:5000/products/";
const URL_COMMENT = "http://localhost:5000/comments/";

export const fetchComments = createAsyncThunk(
  "multiCart/fetchComments",
  async () => {
    const res = await axios.get(URL_COMMENT);
    return res.data;
  }
);
export const fetchProducts = createAsyncThunk(
  "multiCart/fetchProducts",
  async () => {
    const res = await axios.get(URL);
    return res.data;
  }
);

export const changeLike = createAsyncThunk(
  "multiCart/changeLike",
  async (updateItem) => {
    const { item, data } = updateItem;
    const res = await axios.put(URL + item.id, { ...item, ...data });
    return res.data;
  }
);

export const changeCount = createAsyncThunk(
  "multiCart/changeCount",
  async (updateItem) => {
    const { item, data } = updateItem;

    const res = await axios.put(URL + item.id, { ...item, ...data });
    return res.data;
  }
);
export const postComment = createAsyncThunk(
  "multiCart/replyComment",
  async (rComment) => {
    const res = axios.post(URL_COMMENT, rComment);
  }
);

const nestedReplyComment = (temp, p) => {
  temp.forEach((comment) => {
    if (comment.id === p.parentId) {
      comment.children.push(p);
      return;
    } else if (comment.children.length > 0) {
      nestedReplyComment(comment.children, p);
    }
  });
};
const initialState = {
  items: [],
  filterItems: [],
  cartItems: [],
  likeItems: [],
  comments: [],
  temp: [],
  loading: "",
  error: "",
  activePagination: 0,
  paginationValues: {
    currentPage: 0,
    perPage: 6,
  },
  filterValues: {
    size: "ALL",
    sort: "",
    price: undefined,
  },
};

const clothingSlice = createSlice({
  name: "multiCart",
  initialState,
  reducers: {
    handleActivePagination: (state, action) => {
      state.activePagination = action.payload;
    },
    handleRemoveFilters: (state) => {
      state.filterValues = {
        ...state.filterValues,
        size: "ALL",
        sort: "",
        price: undefined,
      };
    },
    setFilterSize: (state, action) => {
      state.filterValues.size = action.payload;
    },
    setFilterSort: (state, action) => {
      state.filterValues.sort = action.payload;
    },
    setFilterPrice: (state, action) => {
      state.filterValues.price = action.payload;
    },
    addComment: (state, action) => {
      state.comments.push(action.payload);
    },

    handleSetFilteritems: (state) => {
      state.filterItems = [...state.temp];
    },
    handleFilterBySize: (state, action) => {
      state.temp = [...state.items];

      if (
        state.filterValues.size.toLowerCase() !== "all" &&
        state.filterValues.size !== ""
      ) {
        state.temp = state.temp.filter((item) =>
          item.availableSizes.includes(state.filterValues.size)
        );
      }
    },
    handleFilterByPrice: (state, action) => {
      state.temp = state.temp.filter(
        (p) => p.price <= parseFloat(state.filterValues.price)
      );
    },

    handleReplyComment: (state, action) => {
      let temp = [...state.comments];
      let p = action.payload;
      nestedReplyComment(temp, p);
      state.comments = [...temp];
    },
    handleFilterBySort: (state, action) => {
      state.temp.sort((a, b) => {
        if (state.filterValues.sort.toLowerCase() === "ascending") {
          if (a.price > b.price) return 1;
          return -1;
        } else if (state.filterValues.sort.toLowerCase() === "descending") {
          if (a.price < b.price) return 1;
          return -1;
        } else {
          if (a.id > b.id) return 1;
          return -1;
        }
      });
    },
    handleCurrentPage: (state, action) => {
      if (action.payload === 0) {
        state.paginationValues.currentPage = action.payload;
        state.activePagination = action.payload;
      } else {
        state.paginationValues.currentPage = action.payload - 1;
        state.activePagination = action.payload - 1;
      }
    },
    handlePagination: (state) => {
      const offset =
        state.paginationValues.currentPage * state.paginationValues.perPage;
      state.filterItems = state.temp.slice(
        offset,
        offset + state.paginationValues.perPage
      );
    },
  },
  extraReducers: {
    // Section fetch data
    [fetchProducts.pending]: (state) => {
      state.loading = "loading";
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.loading = "succeeded";
      state.items = action.payload;
      state.temp = action.payload;

      const tempSort = state.items;
      tempSort.sort((a, b) => {
        return +a.price - +b.price;
      });
      state.filterValues.minVal = tempSort.at(0).price;
      state.filterValues.maxVal = tempSort.at(-1).price;

      const tempLike = state.items.filter((item) => item.isLike === true);
      state.likeItems = [...tempLike];

      const tempCart = state.items.filter((item) => item.count > 0);
      state.cartItems = [...tempCart];
    },
    [fetchProducts.rejected]: (state, action) => {
      state.loading = "faild";
      state.error = action.error.message;
    },

    [fetchComments.pending]: (state) => {
      state.loading = "loading";
    },
    [fetchComments.fulfilled]: (state, action) => {
      state.loading = "succeeded";
      var mapArr = {};
      action.payload.forEach((item) => {
        var id = item.id;

        if (!mapArr.hasOwnProperty(id)) {
          mapArr[id] = item;
          const copy = { ...mapArr[id], children: [] };
          mapArr[id] = copy;
        }
      });

      // backendComments.forEach((item) => {
      //   if (!mapArr.hasOwnProperty(item.parentId)) {
      //     var newObj = {
      //       id: item.parentId,
      //       body: "hello",
      //       username: "marin",
      //       userId: "1",
      //       parentId: null,
      //       createdAt: "2021-08-16T23:00:33.010+02:00",
      //     };
      //     mapArr[item.parentId] = newObj;
      //     mapArr[item.parentId].children = [];
      //   }
      // });
      for (var id in mapArr) {
        if (mapArr.hasOwnProperty(id)) {
          var mapElem = mapArr[id]; //  key of object
          if (mapElem.parentId) {
            mapArr[mapElem.parentId].children.push(mapElem); // children
          } else {
            state.comments.push(mapElem);
          }
        }
      }
      // state.comments = [...Object.values(mapArr)];
    },
    [fetchComments.rejected]: (state, action) => {
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
  handleFilterByPrice,
  handleDeleteLikeItem,
  handleReplyComment,
  addComment,
  handleSetFilteritems,
  setFilterSize,
  setFilterPrice,
  setFilterSort,
  handleRemoveFilters,
  handlePagination,
  handleCurrentPage,
  handleActivePagination,
} = clothingSlice.actions;
export default clothingSlice.reducer;
