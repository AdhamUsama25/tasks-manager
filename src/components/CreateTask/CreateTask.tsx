import { useRef } from "react";
import classes from "./CreateTask.module.css";
import CustomDialog from "../UI/CustomDialog/CustomDialog";

const AddTaskButton = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const openDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  };

  const closeDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    closeDialog();
  };

  return (
    <>
      <CustomDialog dialogRef={dialogRef} >
        <form onSubmit={handleSubmit}>
          <label htmlFor="taskName">Task Name:</label>
          <input type="text" id="taskName" required />
          <button type="submit">Add Task</button>
          <button type="button" onClick={closeDialog}>Close</button>
        </form>
      </CustomDialog>

      <button onClick={openDialog} className={classes.AddTaskButton}>+</button>
    </>
  );
};

export default AddTaskButton;
