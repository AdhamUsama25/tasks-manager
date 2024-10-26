import React, { useEffect } from "react";
import CustomDialog from "../UI/CustomDialog/CustomDialog";
import { ITask } from "../../types/tasks.types";

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
      <h2>{task.title}</h2>
      <p>{task.description}</p>
    </CustomDialog>
  );
};

export default SingleTaskViewer;
