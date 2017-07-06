import { createStore, combineReducers } from 'redux'
import session from './reducers/sessionReducer'
import counter from './reducers/counterReducer'
import posts from './reducers/postsReducer'

const rootReducer = combineReducers({
  posts: posts,
  counter: counter,
  session: session
})

const store = createStore(rootReducer)

export default store
