import { createStore, combineReducers } from "redux";

const InitalState = {
  postCollection: []
};
const counter = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

const posts = (state = InitalState, action) => {
  switch (action.type) {
    case "ADD POST":
      return {
        postCollection: [
          ...state.postCollection,
          {
            title: action.data.title,
            content: action.data.content,
            timestamp: Date(),
            id: action.data.id
          }
        ]
      };
    case "REMOVE POST":
      const newPostCollection = state.postCollection.filter(el => {
        console.log(action.idToRemove);
        console.log(el.id);
        return el.id !== action.idToRemove;
      });

      console.log(action.idToRemove);
      //    console.log(newpostCollection[0].id);
      return {
        postCollection: newPostCollection
      };
    default:
      return state;
  }
};
const session = (state = {}, action) => {
  switch (action.type) {
    case "Login":
      return { login: action.data.login, password: action.data.password };
    case "Logout":
      return {};
    default:
      return state;
  }
};
const rootReducer = combineReducers({
  posts: posts,
  counter: counter,
  session: session
});

const store = createStore(rootReducer);

export default store;
