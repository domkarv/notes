import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./userReducer";
import workoutsReducer from "./workoutsReducer";

const Store = configureStore({
  reducer: {
    user: userReducer,
    workouts: workoutsReducer,
  },
});

export default Store;
