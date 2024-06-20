import { useReducer, useEffect } from 'react';
import './App.scss';
import { jokeReducer } from './Reducers/Reducers';
import { initialState } from './Reducers/jokes';



function App() {
  
  const [jokes, dispatch] = useReducer(jokeReducer, [], () => {
    const storedJokes = localStorage.getItem('jokes');
    return storedJokes ? JSON.parse(storedJokes) : initialState;
  });

  
  useEffect(() => {
    localStorage.setItem('jokes', JSON.stringify(jokes));
  }, [jokes]);

  const updateRate = (id, rate) => {
    dispatch({ type: 'UPDATE_RATE', payload: { id, rate } });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newJoke = e.target[0].value.trim();
    if (newJoke) {
      dispatch({ type: 'ADD_JOKE', payload: newJoke });
      e.target[0].value = '';
    }else {
      alert('Please enter a joke ');
    }
  };

  const deleteJoke = (id) => {
    dispatch({ type: 'DELETE_JOKE', payload: id }); // Dispatch action to delete the joke
  };


  return (
    <div className='container'>
      <h2>Jokes for you 💀</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input type="text" placeholder='Add a joke' />
        <button type='submit'>Add Joke</button>
      </form>
      <div className="jokes">
        {
          jokes && jokes.sort((a, b) => (b.rate - a.rate)).map((joke) => {
            return (
              <div key={joke.id} className='joke'>
                <div className='joke-text'>{joke.joke}</div>
                <div className='text'>{joke.rate}</div>
                <div className="joke-buttons">
                  <button onClick={() => updateRate(joke.id, joke.rate + 1)}>👍</button>
                  <button onClick={() => updateRate(joke.id, joke.rate - 1)}>👎</button>
                  <button onClick={() => deleteJoke(joke.id)}>🗑️</button>
                </div>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}

export default App;
