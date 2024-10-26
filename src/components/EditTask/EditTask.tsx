import classes from "../CreateTask/CreateTask.module.css";
import CustomDialog from "../UI/CustomDialog/CustomDialog";
import {
  CreateTask,
  EditTask,
  ITask,
  TaskPriority,
  TaskState,
} from "../../types/tasks.types";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAppDispatch } from "../../redux/hooks";
import { editTask } from "../../redux/features/tasks/tasksSlice";
import { useState } from "react";

const schema = yup.object({
  title: yup.string().required("Please, provide a title"),
  description: yup.string(),
  state: yup
    .mixed<TaskState>()
    .oneOf(["todo", "doing", "done"])
    .required("Please, choose a state"),
  priority: yup
    .mixed<TaskPriority>()
    .oneOf(["low", "medium", "high"])
    .required("Please, choose a priority"),
  image: yup.mixed(),
});

const EditTaskModal = ({
  task,
  dialogRef,
}: {
  task: ITask;
  dialogRef: React.RefObject<HTMLDialogElement>;
}) => {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<CreateTask>({
    defaultValues: task,
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<EditTask> = (data) => {
    const newTaskDetails: ITask = {
      id: task.id,
      title: data.title,
      description: data.description,
      state: data.state,
      priority: data.priority,
      image: data.image && data.image[0],
    };
    dispatch(editTask(newTaskDetails));
    dialogRef.current?.close();
  };
  const [imageURL, setImageURL] = useState(task.image || null);

  const onImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const url = URL.createObjectURL(files[0]);
      setImageURL(url);
      setValue("image", url, { shouldValidate: true });
    }
  };

  return (
    <CustomDialog showCloseButton={false} dialogRef={dialogRef}>
      <div style={{ maxHeight: "80vh", overflowY: "scroll" }}>
        {imageURL && (
          <img
            src={imageURL}
            style={{
              borderRadius: "8px",
            }}
            alt="Task preview"
          />
        )}
        <form className={classes.AddTaskForm} onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="taskImage">Image</label>
            <input type="file" id="taskImage" onChange={onImageChange} />
            <p>{imageURL}</p>
            <p className={classes.Error}>{errors.image?.message}</p>
          </div>
          <div>
            <label htmlFor="taskName">Title:</label>
            <input type="text" id="taskName" {...register("title")} />
            <p className={classes.Error}>{errors.title?.message}</p>
          </div>
          <div>
            <label htmlFor="taskDescription">Description:</label>
            <input
              type="text"
              id="taskDescription"
              {...register("description")}
            />
            <p className={classes.Error}>{errors.description?.message}</p>
          </div>
          <div>
            <label htmlFor="taskState">State:</label>
            <select id="taskState" {...register("state")}>
              <option value="todo">To Do</option>
              <option value="doing">Doing</option>
              <option value="done">Done</option>
            </select>
            <p className={classes.Error}>{errors.state?.message}</p>
          </div>
          <div>
            <label htmlFor="taskPriority">Task Priority:</label>
            <select id="taskPriority" {...register("priority")}>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
            <p className={classes.Error}>{errors.priority?.message}</p>
          </div>
          <div className={classes.FormControl}>
            <button type="submit">Save</button>
            <button type="button" onClick={() => dialogRef.current?.close()}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </CustomDialog>
  );
};

export default EditTaskModal;
