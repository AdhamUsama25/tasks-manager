import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./features/tasks/tasksSlice";

export const store = configureStore({
    reducer: {
      // States
      tasks: tasksReducer,
      // API
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({}).concat([
      ]),
  });
  
  export type RootState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch;

