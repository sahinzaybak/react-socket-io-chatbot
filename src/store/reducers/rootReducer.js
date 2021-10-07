import {combineReducers} from 'redux'
import users from './users'
import lastMessage from './lastMessage'

export default combineReducers({
  users,
  lastMessage
})