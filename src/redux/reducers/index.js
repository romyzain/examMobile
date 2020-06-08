import { combineReducers } from 'redux';
import UserReducers from './userReducers';
import LoginReducers from './loginReducers';

export default combineReducers({
    user: UserReducers,
    loginForm: LoginReducers
})