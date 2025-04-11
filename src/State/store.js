import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./reducers/sidebarReducer";

const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
  },
});

export default store;
