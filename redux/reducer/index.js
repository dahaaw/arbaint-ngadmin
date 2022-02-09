import {combineReducers} from 'redux';
import authReducer from './auth/reducer';
import generalReducer from './general/reducer';

const reducer = combineReducers({
    general: generalReducer,
    auth: authReducer,
});

export default reducer;