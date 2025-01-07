import React, { useState } from 'react';
export default function TaskForm({addTask}) {

    const [task, setTask] = useState('');
    const [priority, setPriority] = useState("Medium");
    const [category, setCategory] = useState("General");

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask({task : task , priority,category, completed: false});
        // after adding resetting to default values.
        setPriority("Medium");
        setCategory("General");
        setTask("");
    }

    return (
            <form onSubmit={handleSubmit} className="task-form">
                <div>
                    <input type = "text" value={task}
                           onChange={(e) => setTask(e.target.value)}
                           placeholder="Enter your task" required />
                    <button type='submit'>ADD TASK</button>
                </div>

                <div id="btns">
                    <select onChange={(e) => setPriority(e.target.value)}>
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </select>
                    <select onChange={(e) => setCategory(e.target.value)}>
                        <option value="General">General</option>
                        <option value="Work">Work</option>
                        <option value="Personal">Personal</option>
                    </select>
                </div>
            </form>
    )
}