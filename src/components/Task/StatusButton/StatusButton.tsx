import { useState } from "react";
import { editTask } from "../../../redux/features/tasks/tasksSlice";
import { useAppDispatch } from "../../../redux/hooks";
import { ITask } from "../../../types/tasks.types";
import classes from "./StatusButton.module.css";

const statusToTextMap = {
  todo: "To Do",
  doing: "Doing",
  done: "Done",
};

const statusToStyleMap = {
  todo: {
    backgroundColor: "var(--to-do-color)",
  },
  doing: {
    backgroundColor: "var(--doing-color)",
  },
  done: {
    backgroundColor: "var(--done-color)",
  },
};

const StatusButton = ({ task }: { task: ITask }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useAppDispatch();

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const statusToMenuItems = [
    {
      text: "To Do",
      status: "todo",
      action: () => {
        dispatch(editTask({ ...task, state: "todo" }));
        setIsMenuOpen(false);
      },
      style: statusToStyleMap.todo,
    },
    {
      text: "Doing",
      status: "doing",
      action: () => {
        dispatch(editTask({ ...task, state: "doing" }));
        setIsMenuOpen(false);
      },
      style: statusToStyleMap.doing,
    },
    {
      text: "Done",
      status: "done",
      action: () => {
        dispatch(editTask({ ...task, state: "done" }));
        setIsMenuOpen(false);
      },
      style: statusToStyleMap.done,
    },
  ];

  return (
    <div className={classes.Container}>
      <button
        className={classes.StatusButton}
        style={statusToStyleMap[task.state]}
        onClick={toggleMenu}
      >
        {statusToTextMap[task.state]}
      </button>

      {isMenuOpen && (
        <div className={classes.StatusMenu}>
          {statusToMenuItems.map((item) => (
            <button
              key={item.status}
              className={classes.StatusMenuItem}
              onClick={item.action}
              style={item.style}
            >
              {item.text}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default StatusButton;
