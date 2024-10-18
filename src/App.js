// src/App.js
import React, { useState } from 'react';
import Header from './components/Header';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';
import './App.css';

const App = () => {
    const [showForm, setShowForm] = useState(false);

    const toggleForm = () => {
        setShowForm(!showForm);
    };

    return (
        <div className="App">
            <Header />
            <button className="toggle-button" onClick={toggleForm}>
                {showForm ? 'Hide Form' : 'Add New To-Do'}
            </button>
            {showForm && <ToDoForm refreshToDos={() => window.location.reload()} />}
            <ToDoList />
        </div>
    );
};

export default App;
