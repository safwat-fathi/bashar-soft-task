import { configureStore } from "@reduxjs/toolkit";

import jobsReducer from "./slices/jobs.slice";

const store = configureStore({
  reducer: {
    jobs: jobsReducer,
  },
});

export default store;
