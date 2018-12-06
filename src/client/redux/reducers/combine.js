import { combineReducers } from 'redux';
import imageReducer from './image-reducer';


const reducers = combineReducers({
  images: imageReducer,
});

export default reducers;
