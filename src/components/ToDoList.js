// src/components/ToDoList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ToDoItem from './ToDoItem';

const ToDoList = () => {
    const [todos, setTodos] = useState([]);

    const fetchToDos = async () => {
        const response = await axios.get('http://localhost:8080/toDo');
        setTodos(response.data);
    };

    useEffect(() => {
        fetchToDos();
    }, []);

    return (
        <div className="todo-list">
            <h2>Your To-Do List</h2>
            {todos.length === 0 ? (
                <p>No to-dos available. Add some!</p>
            ) : (
                todos.map((todo) => (
                    <ToDoItem key={todo.id} todo={todo} refreshToDos={fetchToDos} />
                ))
            )}
        </div>
    );
};

export default ToDoList;
