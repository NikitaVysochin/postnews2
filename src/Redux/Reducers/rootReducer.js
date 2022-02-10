const initState = {
  posts: []
};

export const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_POST':
       return {...state, posts: [...state.posts, action.payload]}
           
      default:
        return state
  }
}
 