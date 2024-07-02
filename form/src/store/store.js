
import { createStore } from 'redux';
import fileReducer from '../reducers/fileReducer';

const store = createStore(fileReducer);

export default store;
