import {fork, all} from 'redux-saga/effects';
import auth from './redux/Login/sagas'

export default function* rootSaga() {
	yield all([
		fork(auth),
	])
}