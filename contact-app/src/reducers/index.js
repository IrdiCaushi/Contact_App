// This is used to combine more than one reducer, 
// if there are more than one in the application

import { combineReducers } from 'redux';
import contacts from './contactReducer';

export default combineReducers({
    contacts: contacts
});