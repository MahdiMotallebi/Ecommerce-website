import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { data } from '../data/db';

//get all data from database
export const fetchComments = createAsyncThunk(
  'multiCart/fetchComments',
  async () => {
    return data.comments;
  }
);
export const fetchProducts = createAsyncThunk(
  'multiCart/fetchProducts',
  async () => {
    return data.products;
  }
);

export const fetchCartItems = createAsyncThunk(
  'multiCart/fetchCartItems',
  async () => {
    return data.cartItems;
  }
);

export const fetchCompare = createAsyncThunk(
  'multiCart/fetchCompare',
  async () => {
    return data.compare;
  }
);

export const fetchWishList = createAsyncThunk(
  'multiCart/fetchWishList',
  async () => {
    return data.wishList;
  }
);

export const postComment = createAsyncThunk(
  'multiCart/replyComment',
  async (rComment) => {}
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
  compare: [],
  temp: [],
  product: {},
  loading: '',
  error: '',
  activePagination: 0,
  paginationValues: {
    currentPage: 0,
    perPage: 6,
  },
  filterValues: {
    size: 'All',
    color: 'All',
    sort: '',
    price: 0,
  },
  categories: {
    colors: [],
    size: [],
    sort: [],
  },
  language: [
    {
      code: 'en',
      name: 'English',
      country_code: 'GB',
    },
    {
      code: 'fa',
      name: 'Persian',
      dir: 'rtl',
      country_code: 'IR',
    },
  ],
};

const clothingSlice = createSlice({
  name: 'multiCart',
  initialState,
  reducers: {
    handleFindProduct: (state, action) => {
      const t = state.items.filter((p) => p.id === action.payload)[0];

      state.product = t;
    },
    handleActivePagination: (state, action) => {
      state.activePagination = action.payload;
    },
    handleRemoveFilters: (state) => {
      state.filterValues = {
        ...state.filterValues,
        size: 'All',
        color: 'All',
        sort: '',
        price: 0,
      };
    },
    setFilterValues: (state, action) => {
      switch (action.payload.type) {
        case 'color':
          state.filterValues.color = action.payload.val;
          break;
        case 'size':
          state.filterValues.size = action.payload.val;
          break;
        case 'sort':
          state.filterValues.sort = action.payload.val;
          break;
        case 'price':
          state.filterValues.price = action.payload.val;
          break;
      }
    },

    addComment: (state, action) => {
      state.comments.push(action.payload);
    },

    handleSetFilteritems: (state) => {
      state.filterItems = [...state.temp];
    },
    handleFilterBySize: (state) => {
      state.temp = [...state.items];

      if (
        state.filterValues.size.toLowerCase() !== 'all' &&
        state.filterValues.size !== ''
      ) {
        state.temp = state.temp.filter((item) =>
          item.availableSizes.includes(state.filterValues.size)
        );
      }
    },

    handleFilterByColor: (state) => {
      if (state.filterValues.color.toLowerCase() !== 'all')
        state.temp = state.temp.filter((item) =>
          item.colors.includes(state.filterValues.color)
        );
    },
    handleFilterByPrice: (state) => {
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
        if (state.filterValues.sort.toLowerCase() === 'ascending') {
          if (a.price > b.price) return 1;
          return -1;
        } else if (state.filterValues.sort.toLowerCase() === 'descending') {
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
    handleLikeItems: (state, action) => {
      const t = state.likeItems.some((p) => p.id === action.payload.id);
      if (t) {
        const newLikeItems = state.likeItems.filter(
          (p) => p.id !== action.payload.id
        );
        state.likeItems = newLikeItems;
      } else {
        state.likeItems.push(action.payload);
      }
    },
    handleRemoveFromWishlist: (state, action) => {
      const tempLikeItems = state.likeItems.filter(
        (p) => p.id !== action.payload
      );
      state.likeItems = tempLikeItems;
    },
    handleCartItems: (state, action) => {
      const { id, size, count, color } = action.payload;
      const newColor = color.slice(1);

      const t = state.cartItems.some((p) => p.id === id + size + newColor);
      let newProduct = {};
      if (t) {
        const tempCart = state.cartItems.map((p) => {
          if (p.id === id + size + newColor) {
            newProduct = { ...p, count: count, size: size, color: newColor };

            return newProduct;
          }
          return p;
        });
        state.cartItems = tempCart;
      } else {
        const newItem = {
          id: id + size + newColor,
          title: state.product.title,
          image: state.product.image,
          price: state.product.price,
          count,
          size,
          color,
        };
        state.cartItems.push(newItem);
      }
    },
    handleRemoverFromCart: (state, action) => {
      const tempCart = state.cartItems.filter((p) => p.id !== action.payload);
      state.cartItems = tempCart;
    },
    handleIncCount: (state, action) => {
      let newItem = {};
      const tempCart = state.cartItems.map((p) => {
        if (p.id === action.payload) {
          let newCount = p.count + 1;
          newItem = { ...p, count: newCount };
          return newItem;
        }
        return p;
      });

      state.cartItems = tempCart;
    },
    handleDecCount: (state, action) => {
      let newItem = {};
      const tempCart = state.cartItems.map((p) => {
        if (p.id === action.payload) {
          let newCount = p.count - 1;
          newItem = { ...p, count: newCount };
          return newItem;
        }
        return p;
      });

      state.cartItems = tempCart;
    },

    handleGetUniqueValue: (state, action) => {
      const temp = state.items.map((p) => p[action.payload]).flat();

      if (action.payload === 'colors')
        state.categories.colors = ['all', ...new Set(temp)];

      if (action.payload === 'availableSizes') {
        const t = ['All', ...new Set(temp)];
        state.categories.size = t.map((s) => {
          return { value: s, label: s };
        });
      }
    },
    handleCompare: (state, action) => {
      state.compare.push(action.payload);
    },
    RemoveItemFromCompare: (state, action) => {
      const temp = state.compare.filter((p) => p.id !== action.payload);
      state.compare = temp;
    },
  },
  extraReducers: {
    // fetch products
    [fetchProducts.pending]: (state) => {
      state.loading = 'loading';
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.loading = 'succeeded';
      state.items = action.payload;
      state.temp = action.payload;

      const tempSort = state.items;
      tempSort.sort((a, b) => {
        return +a.price - +b.price;
      });
      state.filterValues.minVal = tempSort.at(0).price;
      state.filterValues.maxVal = tempSort.at(-1).price;
    },
    [fetchProducts.rejected]: (state, action) => {
      state.loading = 'faild';
      state.error = action.error.message;
    },

    //fetch comments
    [fetchComments.pending]: (state) => {
      state.loading = 'loading';
    },
    [fetchComments.fulfilled]: (state, action) => {
      state.loading = 'succeeded';
      var mapArr = {};
      action.payload.forEach((item) => {
        var id = item.id;

        if (!mapArr.hasOwnProperty(id)) {
          mapArr[id] = item;
          const copy = { ...mapArr[id], children: [] };
          mapArr[id] = copy;
        }
      });

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
    },
    [fetchComments.rejected]: (state, action) => {
      state.loading = 'faild';
      state.error = action.error.message;
    },

    //fetch cartItems
    [fetchCartItems.pending]: (state) => {
      state.loading = 'loading';
    },
    [fetchCartItems.fulfilled]: (state, action) => {
      state.loading = 'succeeded';
      state.cartItems = action.payload;
    },
    [fetchCartItems.rejected]: (state, action) => {
      state.loading = 'faild';
      state.error = action.error.message;
    },

    //fetch wishList
    [fetchWishList.pending]: (state) => {
      state.loading = 'loading';
    },
    [fetchWishList.fulfilled]: (state, action) => {
      state.loading = 'succeeded';
      state.likeItems = action.payload;
    },
    [fetchWishList.rejected]: (state, action) => {
      state.loading = 'faild';
      state.error = action.error.message;
    },

    //fetch compare list
    [fetchCompare.pending]: (state) => {
      state.loading = 'loading';
    },
    [fetchCompare.fulfilled]: (state, action) => {
      state.loading = 'succeeded';
      state.compare = action.payload;
    },
    [fetchCompare.rejected]: (state, action) => {
      state.loading = 'faild';
      state.error = action.error.message;
    },
  },
});

export const allState = (state) => state.clothingSlice;
export const {
  handleCart,
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
  handleFindProduct,
  handleLikeItems,
  handleCartItems,
  handleRemoverFromCart,
  handleIncCount,
  handleDecCount,
  handleRemoveFromWishlist,
  handleGetUniqueValue,
  setFilterValues,
  handleFilterByColor,
  handleCompare,
  RemoveItemFromCompare,
} = clothingSlice.actions;
export default clothingSlice.reducer;
