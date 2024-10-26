import Task from "../Task/Task";
import classes from "./TasksList.module.css";
import { useAppSelector } from "../../redux/hooks";
import { useState } from "react";
import { type TaskState, type TaskPriority } from "../../types/tasks.types";

const TasksList = () => {
  const tasks = useAppSelector((state) => state.tasksReducer.tasks);
  const [searchToken, setSearchToken] = useState("");
  const [statusFilters, setStatusFilters] = useState<Set<TaskState>>(new Set());
  const [priorityFilters, setPriorityFilters] = useState<Set<TaskPriority>>(
    new Set()
  );

  const toggleFilters = (value: TaskState | TaskPriority) => {
    if (value === "todo" || value === "doing" || value === "done") {
      setStatusFilters((prev) => {
        const newFilters = new Set(prev);
        if (newFilters.has(value)) {
          newFilters.delete(value);
        } else {
          newFilters.add(value);
        }
        return newFilters;
      });
    }
    if (value === "low" || value === "medium" || value === "high") {
      setPriorityFilters((prev) => {
        const newFilters = new Set(prev);
        if (newFilters.has(value)) {
          newFilters.delete(value);
        } else {
          newFilters.add(value);
        }
        return newFilters;
      });
    }
  };
  const filtersButtons = [
    { name: "To Do", value: "todo" as TaskState },
    { name: "Doing", value: "doing" as TaskState },
    { name: "Done", value: "done" as TaskState },
    { name: "Low", value: "low" as TaskPriority },
    { name: "Medium", value: "medium" as TaskPriority },
    { name: "High", value: "high" as TaskPriority },
  ];

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.title
      .toLowerCase()
      .includes(searchToken.toLowerCase());
    const matchesState = !statusFilters.size || statusFilters.has(task.state);
    const matchesPriority =
      !priorityFilters.size || priorityFilters.has(task.priority);

    return matchesSearch && matchesState && matchesPriority;
  });

  const undoneTasks = filteredTasks.filter((task) => task.state !== "done");
  const doneTasks = filteredTasks.filter((task) => task.state === "done");

  return (
    <>
      <div className={classes.Filtering}>
        <input
          type="text"
          placeholder="Search tasks"
          value={searchToken}
          onChange={(e) => setSearchToken(e.target.value)}
        />
        <div className={classes.FilterButtonsContainer}>
          {filtersButtons.map((filter) => (
            <button
              className={
                statusFilters.has(filter.value as TaskState) ||
                priorityFilters.has(filter.value as TaskPriority)
                  ? classes.active
                  : ""
              }
              key={filter.name}
              onClick={() => toggleFilters(filter.value)}
            >
              {filter.name}
            </button>
          ))}
        </div>
      </div>
      <ul className={classes.TasksList}>
        {undoneTasks.map((task) => (
          <li key={task.id}>
            <Task task={task} />
          </li>
        ))}
        {doneTasks.map((task) => (
          <li key={task.id}>
            <Task task={task} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default TasksList;
