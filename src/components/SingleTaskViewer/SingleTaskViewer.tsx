import React, { useEffect } from "react";
import CustomDialog from "../UI/CustomDialog/CustomDialog";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { unselectTask } from "../../redux/features/tasks/tasksSlice";

const SingleTaskViewer = () => {
  const dialogRef = React.useRef<HTMLDialogElement>(null);
  const selectedTaskId = useAppSelector(
    (state) => state.tasksReducer.selectedTaskId
  );
  const selectedTask = useAppSelector((state) => state.tasksReducer.tasks.find((task) => task.id === selectedTaskId));

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (selectedTaskId) dialogRef.current?.showModal();
  }, [selectedTaskId]);

  return (
    <CustomDialog
      dialogRef={dialogRef}
      preCloseDialogAction={() => dispatch(unselectTask())}
    >
      <h2>{selectedTask?.title}</h2>
      <p>{selectedTask?.description}</p>
    </CustomDialog>
  );
};

export default SingleTaskViewer;
