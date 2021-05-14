import { combineReducers } from 'redux'
import characters from './characters'
import count from './count'

export default combineReducers({count, characters})