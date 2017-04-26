import {applyMiddleware, createStore} from 'redux';
import {createEpicMiddleware} from 'redux-observable';
import {rootEpic} from './observable';

import {todoReducer} from './todoReducer';


export const store = createStore(
	todoReducer,
	applyMiddleware(createEpicMiddleware(rootEpic))
);