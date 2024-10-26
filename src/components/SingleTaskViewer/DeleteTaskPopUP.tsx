import React from "react";
import { useAppDispatch } from "../../redux/hooks";
import classes from "./SingleTaskViewer.module.css";
import CustomDialog from "../UI/CustomDialog/CustomDialog";
import { deleteTask } from "../../redux/features/tasks/tasksSlice";
import { ITask } from "../../types/tasks.types";

const DeleteTaskPopUP = ({
  task,
  dialogRef,
}: {
  task: ITask;
  dialogRef: React.RefObject<HTMLDialogElement>;
}) => {
  const dispatch = useAppDispatch();

  return (
    <CustomDialog showCloseButton={false} dialogRef={dialogRef}>
      <div className={classes.DeleteTaskPopUp}>
        <p>Are you sure you want to delete this task?</p>
        <div className={classes.Actions}>
          <button onClick={() => dispatch(deleteTask(task))}>Yes</button>
          <button
            className={classes.CancelBtn}
            onClick={() => dialogRef.current?.close()}
          >
            Cancel
          </button>
        </div>
      </div>
    </CustomDialog>
  );
};

export default DeleteTaskPopUP;
