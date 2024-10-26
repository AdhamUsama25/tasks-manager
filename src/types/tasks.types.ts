export type TaskState = "todo" | "doing" | "done";
export type TaskPriority = "low" | "medium" | "high";

export interface ITask {
  id: string;
  image: string;
  title: string;
  description: string;
  priority: TaskPriority;
  state: TaskState;
}

export type CreateTask = Omit<ITask, "id">;
export type EditTask = Omit<ITask, "id">;
