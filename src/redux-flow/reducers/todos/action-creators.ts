import { ADD_TODO, TOGGLE_TODO } from './action'
import { v4 } from 'uuid'

export const addTodo = (text: string) => ({
  type: ADD_TODO,
  payload: { id: v4(), text },
})

export const toggleTodo = (id: number) => ({
  type: TOGGLE_TODO,
  payload: { id },
})
