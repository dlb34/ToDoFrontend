// src/components/ToDoItem.js
import React from 'react';
import axios from 'axios';

const ToDoItem = ({ todo, refreshToDos }) => {
    const handleDelete = async () => {
        await axios.delete(`http://localhost:8080/toDo/${todo.id}`);
        refreshToDos();
    };

    const handleCheckboxChange = async () => {
        // Sending a POST request to update the 'done' status
        await axios.post(`http://localhost:8080/toDo/${todo.id}`);
        refreshToDos(); // Refresh the list after updating
    };

    return (
        <div className="todo-item"
            style={{
                marginBottom: '10px',
                backgroundColor: todo.done ? 'lightgreen' : 'white', // Change background color based on done status
                padding: '15px', // Add padding to the entire box
                borderRadius: '5px',
                transition: 'background-color 0.3s', // Smooth transition for the background color
                border: '1px solid #ccc' // Optional: Add a border for better visibility
            }}
        >
            <h3 style={{ margin: 0 }}> {/* Remove margin to eliminate extra space */}
                {todo.title}
            </h3>
            <p style={{ margin: 0 }}> {/* Remove margin to eliminate extra space */}
                {todo.description}
            </p>
            <input
                type="checkbox"
                checked={todo.done}
                onChange={handleCheckboxChange}
            />
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default ToDoItem;
