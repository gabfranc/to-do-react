// To Do App
// For this, I will be using the useState property
//Done: import useState property from react
import { useState } from 'react';
//Done: create function for to do list

function ToDoList() {
  //DONE: create 2 state variables
  const [tasks, setTasks] = useState([]); // tasks variable will be used to create arrays
  // DONE: create a new state variable
  const [newTask, setNewTask] = useState("");

  //DONE: create a function for handling input changes
  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask(""); // Clear the input field
    }
  } // this function will allow me to add a task to the todo list

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  } // this function will allow me to delete a task

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  } // this will allow me to move a task up

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  } // this will allow me to move a task down

  return (
    //What I like about React is that there are html-like components
    //DONE: use a div block to create the to do list
    <body className="bg-blue-800">
    <div className="to-do-list text-blue-500">
      <h1>To Do List:</h1>

      <div>
        <input
          type="text"
          placeholder="Enter Task"
          value={newTask}
          onChange={handleInputChange}
        />

        <button className="add-button" onClick={addTask}>
          ✅
        </button>
      </div>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button className="delete-button" onClick={() => deleteTask(index)}>
              🗑️
            </button>
            <button className="move-button" onClick={() => moveTaskUp(index)}>
              👆
            </button>
            <button className="down-button" onClick={() => moveTaskDown(index)}>
              👇
            </button>
          </li>
        ))}
      </ol>
    </div>
    </body>
  );
}

export default ToDoList;