import { configureStore } from "@reduxjs/toolkit";
import clothingSlice from "../features/shopSlice";

export const store = configureStore({
  reducer: { clothingSlice },
});
