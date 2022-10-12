import { createReducer } from '../crete-reducer'
import { ADD_TODO, TOGGLE_TODO } from './action'
export type StateProps = any[] | undefined

export type ActionProps = {
  type?: string
  payload?: {
    id: number
    text?: string
  }
}

export const initialState: [] = []

export const reducerTodos = createReducer(initialState, {
  [ADD_TODO]: (state: any, action: any) =>
    state?.concat({
      id: action.payload?.id,
      text: action.payload?.text,
      completed: false,
    }),
  [TOGGLE_TODO]: (state: any, action: any) =>
    state?.map((todo: { id: number; completed: boolean }) => {
      if (todo.id !== action.payload?.id) {
        return todo
      }
      return {
        ...todo,
        completed: !todo.completed,
      }
    }),
})
