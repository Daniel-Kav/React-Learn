// Define the reducer function
export function jokeReducer(state, action) {
  switch (action.type) {
    case 'ADD_JOKE':
      return [...state, { id: state.length + 1, joke: action.payload, rate: 0 }];
    case 'UPDATE_RATE':
      return state.map(joke =>
        joke.id === action.payload.id ? { ...joke, rate: action.payload.rate } : joke
      );
    case 'SET_JOKES':
      return action.payload;
    default:
      return state;
  }
}