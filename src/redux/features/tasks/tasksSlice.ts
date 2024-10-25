import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITask } from "../../../types/tasks.types";
import { dummyTasks } from "../../../data/tasks.data";

interface AuthState {
  tasks: ITask[];
  selectedTaskId: null | string;
}

const initialState: AuthState = {
  tasks: dummyTasks,
  selectedTaskId: null,
};

export const tasksSlice = createSlice({
  name: "tasksSlice",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<ITask>) => {
      state.tasks.push(action.payload);
    },
    editTask: (state, action: PayloadAction<ITask>) => {
      const taskIndex = state.tasks.findIndex(
        (task) => task.id === action.payload.id
      );
      state.tasks[taskIndex] = action.payload;
    },
    deleteTask: (state, action: PayloadAction<ITask>) => {
      state.tasks = state.tasks.filter(
        (task: ITask) => task.id !== action.payload.id
      );
    },
    selectTask: (state, action: PayloadAction<string>) => {
      state.selectedTaskId = action.payload;
    },
    unselectTask: (state) => {
      state.selectedTaskId = null;
    },
  },
});

export const { addTask, editTask, deleteTask, selectTask, unselectTask } =
  tasksSlice.actions;
// ? Export the authSlice.reducer to be included in the store.
export default tasksSlice.reducer;
