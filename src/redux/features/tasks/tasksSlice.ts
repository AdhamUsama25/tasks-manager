import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Task } from "../../../types/tasks.types";

interface AuthState {
  tasks: Task[];
}

const initialState: AuthState = {
  tasks: [],
};

export const tasksSlice = createSlice({
  name: "tasksSlice",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
    },
    editTask: (state, action: PayloadAction<Task>) => {
      const taskIndex = state.tasks.findIndex(
        (task) => task.id === action.payload.id
      );
      state.tasks[taskIndex] = action.payload;
    },
    deleteTask: (state, action: PayloadAction<Task>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload.id);
    },
  },
});

export const { addTask } = tasksSlice.actions;
// ? Export the authSlice.reducer to be included in the store.
export default tasksSlice.reducer;
