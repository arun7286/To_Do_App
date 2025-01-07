import React, {useEffect, useState} from 'react';
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskFoam";
import ProgressTracker from "./components/ProgressTracker";
import './Style.css';

function App() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const addTask = task => {
        setTasks([...tasks, task])
    };
    const updateTask = (index, updatedTask) => {
        const newTasks = [...tasks];
        newTasks[index] = updatedTask;
        setTasks(newTasks);
    };

    const deleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

  return (
      <div className="APP">
          <header className="bg-gray-900 py-6 px-4 shadow-md">
              <div className="max-w-4xl mx-auto flex items-center justify-between">
                  <h1 className="text-4xl font-bold text-white">
                      To<span className="text-yellow-400">Do</span>
                  </h1>
                  <p className="text-gray-400 italic">Your friendly task manager</p>
              </div>
          </header>
          <TaskForm addTask={addTask}/>
          <ProgressTracker tasks={tasks} />
          <TaskList tasks={tasks}
                    addTask={addTask}
                deleteTask={deleteTask}
                updateTask={updateTask}/>
      </div>
  );
}

export default App;
