// src/components/ToDoForm.js
import React, { useState } from 'react';
import axios from 'axios';

const ToDoForm = ({ refreshToDos }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [done, setDone] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:8080/toDo', { title, description, done });
        setTitle('');
        setDescription('');
        setDone(false);
        refreshToDos();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
            />
            <label>
                <input
                    type="checkbox"
                    checked={done}
                    onChange={(e) => setDone(e.target.checked)}
                />
                Done
            </label>
            <button type="submit">Add To-Do</button>
        </form>
    );
};

export default ToDoForm;
