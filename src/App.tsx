import "./App.css";
import TasksList from "./components/TasksList/TasksList";

function App() {
  return (
    <div className="page">
      <main>
        <h1>My Tasks</h1>
        <TasksList />
      </main>
    </div>
  );
}

export default App;
