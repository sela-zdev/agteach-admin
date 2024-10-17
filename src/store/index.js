import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../services/api/authApi.js";
import { adminApi } from "../services/api/adminApi.js";
import { instructorApi } from "../services/instructorApi.js";
import { categoryApi } from "../services/categoryApi.js";
import authSlice from "../feature/slice/authSlice.js";
import { productApi } from "../services/productApi.js";
import { courseApi } from "../services/courseApi.js";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [adminApi.reducerPath]: adminApi.reducer,
    [instructorApi.reducerPath]: instructorApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [courseApi.reducerPath]: courseApi.reducer,
    auth: authSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      adminApi.middleware,
      instructorApi.middleware,
      categoryApi.middleware,
      productApi.middleware,
      courseApi.middleware
    ),
});
