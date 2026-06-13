import { useEffect, useState } from "react";

import TaskForms from "./components/TaskForms";
import TaskList from "./components/TaskList";
import FilterBar from "./components/FilterBar";

import {
  getTasks,
  createTask,
  deleteTask,
  updateTask
} from "./services/taskService";

function App() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [filter, setFilter] = useState("All");

  const fetchTasks = async () => {
    try {
      const response = await getTasks();
      setTasks(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleAddTask = async (task) => {
    await createTask(task);
    fetchTasks();
  };

  const handleDeleteTask = async (id) => {
    await deleteTask(id);
    fetchTasks();
  };

  const handleEditTask = (task) => {
    setEditingTask(task);
  };

  const handleUpdateTask = async (id, task) => {
    await updateTask(id, task);
    setEditingTask(null);
    fetchTasks();
  };

  const filteredTasks =
    filter === "All"
      ? tasks
      : tasks.filter(
          (task) => task.status === filter
        );

  return (
    <div style={{ padding: "20px" }}>
      <h1>Task Manager App</h1>

      <TaskForms
        onAdd={handleAddTask}
        editingTask={editingTask}
        onUpdate={handleUpdateTask}
      />

      <hr />

      <FilterBar
        filter={filter}
        setFilter={setFilter}
      />

      <br />
      <br />

      <TaskList
        tasks={filteredTasks}
        onDelete={handleDeleteTask}
        onEdit={handleEditTask}
      />
    </div>
  );
}

export default App;