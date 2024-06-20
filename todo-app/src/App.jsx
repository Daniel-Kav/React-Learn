import { useState } from "react";
import { useReducer } from "react";


const initialState = {
  tasks : [],
  filter: 'all',
}

const taskReduucer = (state, action) => {
  switch (action.type) {
    case 'addTask':
      return {...state, tasks: [...state.tasks, { id: Date.now(), text: action.payload, completed: false }] }
    case 'toggleTask':
      return {...state, 
        tasks: state.tasks.map(task => 
          task.id === action.payload ? { ...task, completed: !task.completed } : task
        )
      }
      case 'removeTask':
        return {...state, tasks: state.tasks.filter(task => task.id !== action.payload)};
      case 'setFilter':
        return {...state, filter: action.payload};
      case 'default':
        return state;
  }
}

export function App() {
  const [state, dispatch] = useReducer(taskReduucer, initialState);
  const [taskText, setTaskText] = useState('');

  const handleaddTask = (e) => {

    e.preventDefault();
    if (taskText.trim()) {
      dispatch({ type: 'addTask', payload: taskText });
      setTaskText('');
    }
  }

  const filteredTasks = state.tasks.filter(task =>{
    if (state.filter === 'all') return true;
    if (state.filter === 'active') return !task.completed;
    if (state.filter === 'completed') return task.completed;
  });

  return (
    <div className="todo-container">
      <h1>To-Do List</h1>
      <form onSubmit={handleaddTask}>
        <input 
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Add a New Task" 
        />
        <button type="submit">Add Task</button>

      </form>
      <div className="filters">
        <button onClick={() => dispatch({ type: 'setFilter', payload: 'all'})}>All</button>
        <button onClick={ () => dispatch({})}>Active</button>
      </div>
    </div>
  )


}