import { selectTask } from "../../redux/features/tasks/tasksSlice";
import { useAppDispatch } from "../../redux/hooks";
import { ITask } from "../../types/tasks.types";
import StatusButton from "./StatusButton/StatusButton";
import classes from "./Task.module.css";

const getTaskPriorityColor = (priority: string) => {
  if (priority === "low") return "var(--low-priority-color)";
  if (priority === "medium") return "var(--medium-priority-color)";
  if (priority === "high") return "var(--high-priority-color)";
  return "white";
};

const Task = ({ task }: { task: ITask }) => {
  const dispatch = useAppDispatch();
  return (
    <div className={classes.Task}>
        
      {task.priority && (
        <div
          style={{ backgroundColor: getTaskPriorityColor(task.priority) }}
          className={classes.Priority}
        />
      )}

      <div className={classes.Details}>
        <p onClick={() => dispatch(selectTask(task.id))} title={task.title} className={classes.Title}>{task.title}</p>
        <p title={task.description} className={classes.Description}>{task.description}</p>
      </div>
      <StatusButton status={task.state} />
    </div>
  );
};

export default Task;
