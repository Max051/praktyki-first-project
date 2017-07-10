import { createStore, combineReducers, compose } from "redux";
import session from "./reducers/sessionReducer";
import counter from "./reducers/counterReducer";
import posts from "./reducers/postsReducer";
import persistState from "redux-localstorage";

const rootReducer = combineReducers({
  posts: posts,
  counter: counter,
  session: session
});

const enhencer = compose(persistState("session"));

const store = createStore(rootReducer, enhencer);

export default store;
