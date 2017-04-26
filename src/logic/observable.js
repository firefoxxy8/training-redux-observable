import 'rxjs';
import {addSync, removeSync, checkSync} from './todoReducer';
import {combineEpics} from 'redux-observable';

const addEpic = action$ => action$
	.ofType('ADD_ASYNC')
	.delay(300)
	.map(({payload}) => addSync(payload));

const removeEpic = action$ => action$
	.ofType('REMOVE_ASYNC')
	.delay(300)
	.map(({payload}) => removeSync(payload));

const checkEpic = action$ => action$
	.ofType('CHECK_ASYNC')
	.delay(300)
	.map(({payload}) => checkSync(payload));

export const rootEpic = combineEpics(addEpic, removeEpic, checkEpic);