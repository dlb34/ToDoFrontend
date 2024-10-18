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
            <div className="todo-item">
                <h3>{todo.title}</h3>
                <p>{todo.description}</p>
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
