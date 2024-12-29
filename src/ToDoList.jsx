import React, { useState } from "react"

function ToDoList() {



    const [tasks, setTasks] = useState(["Finish up plans on Noa tetralogy", "Complete todo app", "Prep for New Year's Day"]);

    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }
    function addTask() {

    }
    function deleteTask(index) {

    }
    function moveTaskUp(index) {

    }
    function moveTaskDown(index) {

    }



    return (
        <div className="to-do-list">
            <h1>Daily Todo List</h1>
            <div>
                <input
                    type="text"
                    placeholder="Enter ur task buddy!"
                    value={newTask}
                    onChange={handleInputChange}
                />
                <button className="add-button"
                    onClick={addTask}>
                    Add task!
                </button>
            </div>

            <ol>
                {tasks.map((task, index) =>

                    <li key={index}>
                        <span className="text">{task}</span>
                        <button className="delete-button" onClick={() => deleteTask(index)}>Delete</button>
                        <button className="move-button" onClick={() => moveTaskUp(index)}>☝️</button>
                        <button className="move-button" onClick={() => moveTaskDown(index)}>👇</button>
                    </li>
                )}
            </ol>
        </div>
    )
}
export default ToDoList