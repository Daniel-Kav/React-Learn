import { useReducer, useEffect } from 'react';
import './App.scss';
import { jokeReducer } from './Reducers/Reducers';

// Define the initial state
const initialState = [
  {
    id: 1,
    joke: 'What do you call a very small valentine? A valen-tiny!',
    rate: 3
  },
  {
    id: 2,
    joke: 'What did the dog say when he rubbed his tail on the sandpaper? Rough, rough!',
    rate: 2
  },
  {
    id: 3,
    joke: 'A termite walks into the bar and says, "Where is the bar tender?"',
    rate: 1
  },
  {
    id: 4,
    joke: 'Why did the scarecrow win an award? Because he was outstanding in his field!',
    rate: 0
  },
  {
    id: 5,
    joke: 'Why was the math book sad? Because it had too many problems.',
    rate: 0
  }
];



function App() {
  // Load jokes from localStorage or initialState
  const [jokes, dispatch] = useReducer(jokeReducer, [], () => {
    const storedJokes = localStorage.getItem('jokes');
    return storedJokes ? JSON.parse(storedJokes) : initialState;
  });

  // Save jokes to localStorage whenever jokes state changes
  useEffect(() => {
    localStorage.setItem('jokes', JSON.stringify(jokes));
  }, [jokes]);

  const updateRate = (id, rate) => {
    dispatch({ type: 'UPDATE_RATE', payload: { id, rate } });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newJoke = e.target[0].value;
    dispatch({ type: 'ADD_JOKE', payload: newJoke });
    e.target[0].value = ''; 
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
