import { combineReducers } from 'redux';
import repositotiesReducer from './repositotiesReducer';

//combining reducers for store

const reducers = combineReducers({ repositories: repositotiesReducer });
export default reducers;

//making this a type so we can define the store state type so it doesn't throw errors
//this says the rootstate type is the type of the value returned from the combine reducers function
export type RootState = ReturnType<typeof reducers>;
