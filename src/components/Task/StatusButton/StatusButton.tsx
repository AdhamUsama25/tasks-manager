import { stat } from "fs";
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
  const dispatch = useAppDispatch();

  const statusToMenuItems = [
    {
      text: "To Do",
      status: "todo",
      action: () => dispatch(editTask({ ...task, state: "todo" })),
      style: statusToStyleMap.todo,
    },
    {
      text: "Doing",
      status: "doing",
      action: () => dispatch(editTask({ ...task, state: "doing" })),
      style: statusToStyleMap.doing,
    },
    {
      text: "Done",
      status: "done",
      action: () => dispatch(editTask({ ...task, state: "done" })),
      style: statusToStyleMap.done,
    },
  ];

  return (
    <>
      <button
        popovertarget={`${task.id}-status-menu`}
        style={{
          ...statusToStyleMap[task.state],
          anchorName: `--${task.id}-statusButton`,
        }}
        className={classes.StatusButton}
      >
        {statusToTextMap[task.state]}
      </button>

      <div
        className={classes.StatusMenu}
        id={`${task.id}-status-menu`}
        popover="auto"
        style={{
          positionAnchor: `--${task.id}-statusButton`,
        }}
      >
        {statusToMenuItems.map((item) => (
          <button
            key={item.status}
            onClick={item.action}
            className={classes.StatusButton}
            style={item.style}
          >
            {item.text}
          </button>
        ))}
      </div>
    </>
  );
};

export default StatusButton;
