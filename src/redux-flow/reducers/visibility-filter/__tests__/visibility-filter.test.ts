import {
  reducerVisibilityFilter,
  SHOW_COMPLETED,
  SHOW_ALL,
  SHOW_ACTIVE,
  SET_VISIBILITY_FILTER,
  initialState,
} from '../index'

describe('Visibility Filter', () => {
  it('should be a defined', () => {
    expect(reducerVisibilityFilter).not.toBeUndefined()
  })

  it('should show ALL todos', () => {
    const before = SHOW_COMPLETED
    const action = {
      type: SET_VISIBILITY_FILTER,
      payload: { filter: SHOW_ALL },
    }
    const after = SHOW_ALL

    expect(reducerVisibilityFilter(before, action)).toBe(after)
  })

  it('should show only COMPLETED todos', () => {
    const before = SHOW_ALL
    const action = {
      type: SET_VISIBILITY_FILTER,
      payload: { filter: SHOW_COMPLETED },
    }
    const after = SHOW_COMPLETED

    expect(reducerVisibilityFilter(before, action)).toBe(after)
  })

  it('should show only ACTIVES todos', () => {
    const before = SHOW_ALL
    const action = {
      type: SET_VISIBILITY_FILTER,
      payload: { filter: SHOW_ACTIVE },
    }
    const after = SHOW_ACTIVE

    expect(reducerVisibilityFilter(before, action)).toBe(after)
  })

  it('should return latest state when action is unknown', () => {
    const before = SHOW_ALL
    const action = {
      type: 'UNKNOWN',
      payload: { filter: SHOW_COMPLETED },
    }
    const after = SHOW_ALL

    expect(reducerVisibilityFilter(before, action)).toBe(after)
  })

  it('should return INITIAL STATE when before is undefined', () => {
    const before = undefined
    const action = {}
    const after = initialState

    expect(reducerVisibilityFilter(before, action)).toBe(after)
  })
})
