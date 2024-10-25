import Task from "../Task/Task";
import classes from "./TasksList.module.css";
import { useAppSelector } from "../../redux/hooks";

const TasksList = () => {
  const tasks = useAppSelector((state) => state.tasksReducer.tasks);

  return (
    <>
      <ul className={classes.TasksList}>
        {tasks.map((task) => (
          <li key={task.id}>
            <Task task={task} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default TasksList;
