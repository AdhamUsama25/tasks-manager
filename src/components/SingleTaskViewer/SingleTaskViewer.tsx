import React, { useEffect } from "react";
import CustomDialog from "../UI/CustomDialog/CustomDialog";
import { ITask } from "../../types/tasks.types";
import classes from "./SingleTaskViewer.module.css";
import { useAppDispatch } from "../../redux/hooks";
import { deleteTask } from "../../redux/features/tasks/tasksSlice";

const statusToTextMap = {
  todo: "To Do",
  doing: "Doing",
  done: "Done",
};
const priorityToTextMap = {
  low: "Low Priority",
  medium: "Medium Priority",
  high: "High Priority",
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

const priorityToStyleMap = {
  low: {
    backgroundColor: "var(--low-priority-color)",
  },
  medium: {
    backgroundColor: "var(--medium-priority-color)",
  },
  high: {
    backgroundColor: "var(--high-priority-color)",
  },
};

const SingleTaskViewer = ({
  task,
  isOpen,
  setIsOpen,
}: {
  task: ITask;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const dispatch = useAppDispatch();
  const dialogRef = React.useRef<HTMLDialogElement>(null);
  const deleteDialogRef = React.useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (dialogRef.current) {
      if (isOpen) {
        dialogRef.current.showModal();
      } else {
        dialogRef.current.close();
      }
    }
  }, [isOpen]);

  return (
    <>
      <CustomDialog showCloseButton={false} dialogRef={deleteDialogRef}>
        <div className={classes.DeleteTaskPopUp}>
          <p>Are you sure you want to delete this task?</p>
          <div className={classes.Actions}>

          <button onClick={() => dispatch(deleteTask(task))}>Yes</button>
          <button className={classes.CancelBtn} onClick={() => deleteDialogRef.current?.close()}>Cancel</button>
          </div>
        </div>
      </CustomDialog>
      <CustomDialog
        dialogRef={dialogRef}
        preCloseDialogAction={() => setIsOpen(false)}
      >
        <div className={classes.SingleTaskViewer}>
          {task.image && <img src={task.image} alt={task.title} />}

          <div className={classes.Content}>
            <h2>{task.title}</h2>
            <p>{task.description}</p>

            <div className={classes.StatusAndPriority}>
              <p style={statusToStyleMap[task.state]}>
                {statusToTextMap[task.state]}
              </p>
              <p
                style={{ ...priorityToStyleMap[task.priority], color: "white" }}
              >
                {priorityToTextMap[task.priority]}
              </p>
            </div>

            <div className={classes.Actions}>
              <button onClick={() => null}>Edit</button>
              <button
                onClick={() => deleteDialogRef.current?.showModal()}
                className={classes.DeleteBtn}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </CustomDialog>
    </>
  );
};

export default SingleTaskViewer;
