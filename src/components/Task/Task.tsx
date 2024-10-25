import { ITask } from "../../types/tasks.types";
import classes from "./Task.module.css";

const getTaskPriorityColor = (priority: string) => {
  if (priority === "low") return "var(--low-priority-color)";
  if (priority === "medium") return "var(--medium-priority-color)";
  if (priority === "high") return "var(--high-priority-color)";
  return "white";
};

const Task = ({ task }: { task: ITask }) => {
  return (
    <div className={classes.Task}>
        
      {task.priority && (
        <div
          style={{ backgroundColor: getTaskPriorityColor(task.priority) }}
          className={classes.Priority}
        />
      )}

      <div className={classes.Details}>
        <p className={classes.Title}>{task.title}</p>
        <p className={classes.Description}>{task.description}</p>
      </div>
      <button>{task.state}</button>
    </div>
  );
};

export default Task;
