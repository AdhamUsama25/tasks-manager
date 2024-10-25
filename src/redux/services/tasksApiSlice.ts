import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseURL } from "../config";
import { CreateTask, Task } from "../../types/tasks.types";

export const tasksAPI = createApi({
  reducerPath: "tasksAPI",
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
  tagTypes: ["tasks"],
  endpoints: (builder) => ({
    getTasks: builder.query({ query: () => "tasks" }),

    createTask: builder.mutation({
      query: (task: CreateTask) => ({
        url: "/tasks.json",
        method: "POST",
        body: task,
      }),
      invalidatesTags: ["tasks"],
    }),
    editTask: builder.mutation({
      query: (task: Task) => ({
        url: `/tasks.json/${task.id}`,
        method: "PUT",
        body: task,
      }),
      invalidatesTags: ["tasks"],
    }),
    deleteTask: builder.mutation({
      query: (taskId: number) => ({
        url: `/tasks/${taskId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["tasks"],
    }),
  }),
});

export const {
    useGetTasksQuery,
    useCreateTaskMutation,
    useEditTaskMutation,
    useDeleteTaskMutation,
} = tasksAPI;
