import { useRef } from "react";
import classes from "./CreateTask.module.css";
import CustomDialog from "../UI/CustomDialog/CustomDialog";
import {
  CreateTask,
  ITask,
  TaskPriority,
  TaskState,
} from "../../types/tasks.types";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAppDispatch } from "../../redux/hooks";
import { addTask } from "../../redux/features/tasks/tasksSlice";
import { v4 as uuidv4 } from "uuid";

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

const AddTaskButton = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<CreateTask>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<CreateTask> = (data) => {
    const newTask: ITask = {
      id: uuidv4(),
      title: data.title,
      description: data.description,
      state: data.state,
      priority: data.priority,
      image: data.image && data.image[0],
    };
    dispatch(addTask(newTask));
    closeDialog();
  };

  console.log(watch("image")); // watch input value by passing the name of it

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
  return (
    <>
      <CustomDialog dialogRef={dialogRef}>
        <form className={classes.AddTaskForm} onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="taskImage">Image</label>
            <input type="file" id="taskImage" {...register("image")} />
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
            <button type="submit">Add Task</button>
            <button type="button" onClick={closeDialog}>
              Close
            </button>
          </div>
        </form>
      </CustomDialog>

      <button onClick={openDialog} className={classes.AddTaskButton}>
        +
      </button>
    </>
  );
};

export default AddTaskButton;
