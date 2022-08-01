import { createStore } from 'redux';
import { postsReducer } from './reducer';
export const store = createStore(postsReducer);
