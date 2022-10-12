import { createReducer } from '../crete-reducer'
export type StateProps = any

export type ActionProps = {
  type?: string
  payload: {
    filter: string
  }
}

export type FilterProps = {
  state: StateProps
  action: ActionProps
}

export const SHOW_ALL = 'visibilityFilter:SHOW_ALL'
export const SHOW_COMPLETED = 'visibilityFilter:SHOW_COMPLETED'
export const SHOW_ACTIVE = 'visibilityFilter:SHOW_ACTIVE'
export const SET_VISIBILITY_FILTER = 'visibilityFilter:SET_VISIBILITY_FILTER'

export const initialState: string = SHOW_ALL

export const reducerVisibilityFilter = createReducer(initialState, {
  [SET_VISIBILITY_FILTER]: (state: StateProps, action: ActionProps) =>
    action.payload.filter,
})
