import { combineReducers } from 'redux'
import { reducerTodos } from './todos'
import { reducerVisibilityFilter } from './visibility-filter'

export default combineReducers({
  todos: reducerTodos,
  visibilityFilter: reducerVisibilityFilter,
})
