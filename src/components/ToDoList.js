// src/components/ToDoList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ToDoItem from './ToDoItem';

const ToDoList = () => {
    const [todos, setTodos] = useState([]);

    // Fetch the list of to-dos from the backend
    const fetchToDos = async () => {
        try {
            const response = await axios.get('http://localhost:8080/toDo');
            console.log("Fetched ToDos: ", response.data); // Log the fetched todos

            // Sort todos: Completed ones should move to the bottom
            const sortedTodos = response.data.sort((a, b) => {
                return (a.done === b.done) ? 0 : a.done ? 1 : -1; // Sorting logic
            });

            setTodos(sortedTodos);
        } catch (error) {
            console.error("Error fetching to-dos: ", error);
        }
    };

    useEffect(() => {
        fetchToDos();
    }, []);

    return (
        <div className="todo-list">
            {todos.map(todo => (
                <ToDoItem key={todo.id} todo={todo} refreshToDos={fetchToDos} />
            ))}
        </div>
    );
};

export default ToDoList;
