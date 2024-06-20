import React, { useReducer, useState } from 'react';
import './ToDoApp.scss';

const initialState = {
  tasks: [],
  filter: 'all',
};

const taskReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [...state.tasks, { id: Date.now(), text: action.payload, completed: false }],
      };
    case 'TOGGLE_TASK':
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload ? { ...task, completed: !task.completed } : task
        ),
      };
    case 'DELETE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload),
      };
    case 'SET_FILTER':
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};

function ToDoApp() {
  const [state, dispatch] = useReducer(taskReducer, initialState);
  const [taskText, setTaskText] = useState('');

  const handleAddTask = (e) => {
    e.preventDefault();
    if (taskText.trim()) {
      dispatch({ type: 'ADD_TASK', payload: taskText });
      setTaskText('');
    }
  };

  const filteredTasks = state.tasks.filter(task => {
    if (state.filter === 'all') return true;
    if (state.filter === 'active') return !task.completed;
    if (state.filter === 'completed') return task.completed;
    return true;
  });

  return (
    <div className="todo-container">
      <h1>To-Do List</h1>
      <form onSubmit={handleAddTask}>
        <input
          type="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          placeholder="Add a new task"
        />
        <button type="submit">Add Task</button>
      </form>
      <div className="filters">
        <button onClick={() => dispatch({ type: 'SET_FILTER', payload: 'all' })}>All</button>
        <button onClick={() => dispatch({ type: 'SET_FILTER', payload: 'active' })}>Active</button>
        <button onClick={() => dispatch({ type: 'SET_FILTER', payload: 'completed' })}>Completed</button>
      </div>
      <ul className="task-list">
        {filteredTasks.map(task => (
          <li key={task.id} className={task.completed ? 'completed' : ''}>
            <span onClick={() => dispatch({ type: 'TOGGLE_TASK', payload: task.id })}>
              {task.text}
            </span>
            <button onClick={() => dispatch({ type: 'DELETE_TASK', payload: task.id })}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoApp;
