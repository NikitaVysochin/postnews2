import { ADD_POST, EDIT_POST } from "../constants";

const initState = {
  posts: [{
    title: "",
    news: "",
    link: "",
    tags: [],
    id: 'd11'
  }]
};


export const postReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_POST:
      return { ...state, posts: [...state.posts, action.payload] }
    case EDIT_POST:
      const posts = state.posts.map(post=>{
        if(post.id===action.payload.id){
          return action.payload
        }
        return post
      })
      return { ...state, posts }
    
      default:
        return state
  }
}
