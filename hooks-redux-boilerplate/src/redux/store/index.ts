import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducer/index';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk) // thunk is needed for action functions
)

export default store
export type IRootState = ReturnType<typeof rootReducer>