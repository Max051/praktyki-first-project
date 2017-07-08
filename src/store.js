import { createStore, combineReducers } from "redux";
import session from "./reducers/sessionReducer";
import counter from "./reducers/counterReducer";
import posts from "./reducers/postsReducer";
//import
const rootReducer = combineReducers({
  posts: posts,
  counter: counter,
  session: session
});

// const enhencer = compose(persistState("state"))

const store = createStore(rootReducer);

export default store;
