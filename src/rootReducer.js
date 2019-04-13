import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form'
import { connectRouter } from 'connected-react-router'
import { loadingBarReducer } from 'react-redux-loading-bar'
import auth from './redux/Login/reducer'

export default history =>  combineReducers({
	auth,
	loadingBar: loadingBarReducer,
	form:  formReducer,
	router: connectRouter(history)
}) 

