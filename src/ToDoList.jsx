// import React, { useState } from "react"

// function ToDoList() {



//     const [tasks, setTasks] = useState([]);

//     const [newTask, setNewTask] = useState("");

//     function handleInputChange(event) {
//         setNewTask(event.target.value);
//     }
//     function addTask() {
//         if (newTask.trim() !== "") {
//             setTasks(t => [...t, newTask]);
//             setNewTask("");
//         }
//     }
//     function deleteTask(index) {
//         const updatedTasks = tasks.filter((_, i) => i !== index);
//         setTasks(updatedTasks)

//     }
//     function moveTaskUp(index) {
//         if (index > 0) {
//             const updatedTasks = [...tasks];
//             [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
//             setTasks(updatedTasks)
//         }
//     }
//     function moveTaskDown(index) {

//         if (index < tasks.length - 1) {
//             const updatedTasks = [...tasks];
//             [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
//             setTasks(updatedTasks)
//         }
//     }



//     return (
//         <div className="to-do-list">
//             <h1>Daily Todo List</h1>
//             < br />
//             <div>
//                 <input
//                     type="text"
//                     placeholder="Enter ur task buddy!"
//                     value={newTask}
//                     onChange={handleInputChange}
//                 />
//                 <button className="add-button"
//                     onClick={addTask}>
//                     Add task!
//                 </button>
//             </div>
//             <br />
//             <br />
//             <ol>
//                 {tasks.map((task, index) =>

//                     <li key={index}>
//                         <span className="text">{task}</span>
//                         <button className="delete-button" onClick={() => deleteTask(index)}>Delete</button>
//                         <button className="move-button" onClick={() => moveTaskUp(index)}>☝️</button>
//                         <button className="move-button" onClick={() => moveTaskDown(index)}>👇</button>
//                     </li>
//                 )}
//             </ol>
//         </div>
//     )
// }
// export default ToDoList














import React, { useState, useEffect } from "react";

function ToDoList() {
    const [tasks, setTasks] = useState(() => {
        // Load tasks from localStorage on initial render
        const savedTasks = localStorage.getItem("tasks");
        return savedTasks ? JSON.parse(savedTasks) : [];
    });

    const [newTask, setNewTask] = useState("");

    useEffect(() => {
        // Save tasks to localStorage whenever they change
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        if (newTask.trim() !== "") {
            setTasks((t) => [...t, newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    function moveTaskUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    return (
        <div className="to-do-list">
            <h1>Daily Todo List</h1>
            <br />
            <div>
                <input
                    type="text"
                    placeholder="Enter ur task buddy!"
                    value={newTask}
                    onChange={handleInputChange}
                />
                <button className="add-button" onClick={addTask}>
                    Add task!
                </button>
            </div>
            <br />
            <br />
            <ol>
                {tasks.map((task, index) => (
                    <li key={index}>
                        <span className="text">{task}</span>
                        <button className="delete-button" onClick={() => deleteTask(index)}>
                            Delete
                        </button>
                        <button className="move-button" onClick={() => moveTaskUp(index)}>
                            ☝️
                        </button>
                        <button className="move-button" onClick={() => moveTaskDown(index)}>
                            👇
                        </button>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default ToDoList;
