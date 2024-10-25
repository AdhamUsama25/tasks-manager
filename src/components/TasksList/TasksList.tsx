import React from "react";
import { dummyTasks } from "../../data/tasks.data";
import Task from "../Task/Task";
import classes from "./TasksList.module.css";

const TasksList = () => {
  return (
    <ul className={classes.TasksList}>
      {dummyTasks.map((task) => (
        <li key={task.id}>
          {" "}
          <Task task={task} />{" "}
        </li>
      ))}
    </ul>
  );
};

export default TasksList;
