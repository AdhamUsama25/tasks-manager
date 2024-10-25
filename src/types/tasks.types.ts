export type TaskState = "todo" | "doing" | "done";
export type TaskPriority = "low" | "medium" | "high";

export interface ITask {
    id: number;
    image: string;
    title: string;
    description: string;
    priority: TaskPriority;
    state: TaskState;
}

export type CreateTask = Omit<Task, "id">;