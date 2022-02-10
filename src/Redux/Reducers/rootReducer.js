const initState = {
  posts: []
};

export const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_POST':
       return {...state, posts: [...state.posts, action.payload]}
    
      case 'DECREMENT':
        return {...state, counter: state.counter -1}
        case 'INCREMENT_NUMBER':
          return {...state, counter: state.counter + action.payload}
           
      default:
        return state
  }
}
 