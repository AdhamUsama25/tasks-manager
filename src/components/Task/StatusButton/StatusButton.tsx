import { TaskState } from "../../../types/tasks.types";
import classes from "./StatusButton.module.css";

const statusToTextMap = {
  todo: "To Do",
  doing: "Doing",
  done: "Done",
};

const statusToStyleMap = {
  todo: {
    backgroundColor: "var(--to-do-color)"
  },
  doing: {
    backgroundColor: "var(--doing-color)"
  },
  done: {
    backgroundColor: "var(--done-color)"
  },
};


const StatusButton = ({ status }: { status: TaskState }) => {
  return (
    <button style={statusToStyleMap[status]} className={classes.StatusButton}>{statusToTextMap[status]}</button>
  );
};

export default StatusButton;
