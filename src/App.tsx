import "./App.css";
import AddTaskButton from "./components/CreateTask/CreateTask";
import SingleTaskViewer from "./components/SingleTaskViewer/SingleTaskViewer";
import TasksList from "./components/TasksList/TasksList";

function App() {
  return (
    <div className="page">
      <main>
        <AddTaskButton />
        <SingleTaskViewer />
        <h1>My Tasks</h1>
        <TasksList />
      </main>
    </div>
  );
}

export default App;
