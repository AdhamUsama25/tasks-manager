import React, { useEffect } from "react";
import CustomDialog from "../UI/CustomDialog/CustomDialog";
import { ITask } from "../../types/tasks.types";
import classes from "./SingleTaskViewer.module.css";

const SingleTaskViewer = ({
  task,
  isOpen,
  setIsOpen
}: {
  task: ITask;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const dialogRef = React.useRef<HTMLDialogElement>(null);

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
    <CustomDialog dialogRef={dialogRef} preCloseDialogAction={()=>setIsOpen(false)}>
      <div className={classes.SingleTaskViewer}>

      <img src={task.image} alt={task.title}/>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      </div>
    </CustomDialog>
  );
};

export default SingleTaskViewer;
