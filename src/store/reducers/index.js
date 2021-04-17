import { combineReducers } from 'redux';

import user from './user.reducer';
import home from './home.reducer';


const rootReducer = combineReducers({
    auth: user,
    home: home
});

export default rootReducer;