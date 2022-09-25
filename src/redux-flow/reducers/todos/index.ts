import { ADD_TODO, TOGGLE_TODO } from './action'
export type BeforeProps = any[] | undefined

export type ActionProps = {
  type?: string
  payload?: {
    id: number
    text?: string
  }
}

export type ToDosProps = {
  before: BeforeProps
  action: ActionProps
}

export const initialState: [] = []

export const Todos = (before: BeforeProps, action: ActionProps) => {
  if (before === undefined) {
    return initialState
  }
  switch (action.type) {
    case ADD_TODO:
      return before?.concat({
        id: action.payload?.id,
        text: action.payload?.text,
        completed: false,
      })

    case TOGGLE_TODO: {
      return before?.map(todo => {
        if (todo.id !== action.payload?.id) {
          return todo
        }
        return {
          ...todo,
          completed: !todo.completed,
        }
      })
    }
  }
  return before
}

export default Todos
