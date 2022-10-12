import { SET_VISIBILITY_FILTER } from '.'

export const setVisibiltyFilter = (filter: string) => ({
  type: SET_VISIBILITY_FILTER,
  payload: { filter },
})
