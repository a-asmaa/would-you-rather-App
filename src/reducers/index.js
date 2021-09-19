import {combineReducers} from 'redux'
import { users } from './users'
import { loggedUser } from './loggedUser'
import questions from './questions'



export default combineReducers({
    users, 
    loggedUser,
    questions

})

