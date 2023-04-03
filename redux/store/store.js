import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "../reducers/userSlice";
import CategoriesReducer from "../reducers/jobsCategoriesSlice";
import ServiceReducer from "../reducers/servicesSlice";
export default configureStore({
  reducer: {
    users: UserReducer,
    categories: CategoriesReducer,
    services: ServiceReducer,
  },
});
