import { combineReducers } from 'redux';
import appstateReducer from './appstateReducer';

const rootReducer = combineReducers({
    appState: appstateReducer
});

export default rootReducer