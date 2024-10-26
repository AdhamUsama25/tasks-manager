import Task from "../Task/Task";
import classes from "./TasksList.module.css";
import { useAppSelector } from "../../redux/hooks";

const TasksList = () => {
  const tasks = useAppSelector((state) => state.tasksReducer.tasks);
  const undoneTasks = tasks.filter((task) => task.state !== "done");
  const doneTasks = tasks.filter((task) => task.state === "done");

  return (
    <>
      <ul className={classes.TasksList}>
        {undoneTasks.map((task) => (
          <li key={task.id}>
            <Task task={task} />
          </li>
        ))}
        {doneTasks.map((task) => (
          <li key={task.id}>
            <Task task={task} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default TasksList;
