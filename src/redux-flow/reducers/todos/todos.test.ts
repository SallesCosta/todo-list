import Todos, { initialState } from './index'
import { ADD_TODO, TOGGLE_TODO } from './action'
/* import deepFreeze from 'deep-freeze' */

describe('ToDo...', () => {
  it('should TODOS be a funciton', () => {
    expect(Todos).not.toBeUndefined()
  })

  it('should add a todo item', () => {
    const before: any[] = []

    const action = {
      type: ADD_TODO,
      payload: { id: 0, text: 'Hey' },
    }
    const after = [{ id: 0, text: 'Hey', completed: false }]

    expect(Todos(before, action)).toEqual(after)
  })

  it('should add a new todo item', () => {
    const before = [{ id: 0, text: 'Hey', completed: false }]

    const action = {
      type: ADD_TODO,
      payload: { id: 1, text: 'Ho' },
    }

    const after = [
      { id: 0, text: 'Hey', completed: false },
      { id: 1, text: 'Ho', completed: false },
    ]

    expect(Todos(before, action)).toEqual(after)
  })

  it('should toggle first ToDo', () => {
    const before = [
      { id: 0, text: 'Hey', completed: false },
      { id: 1, text: 'Ho', completed: false },
    ]

    const action = {
      type: TOGGLE_TODO,
      payload: { id: 0 },
    }

    const after = [
      { id: 0, text: 'Hey', completed: true },
      { id: 1, text: 'Ho', completed: false },
    ]
    expect(Todos(before, action)).toEqual(after)
  })

  it('should toggle second ToDo', () => {
    const before = [
      { id: 0, text: 'Hey', completed: false },
      { id: 1, text: 'Ho', completed: false },
    ]

    const action = {
      type: TOGGLE_TODO,
      payload: { id: 1 },
    }

    const after = [
      { id: 0, text: 'Hey', completed: false },
      { id: 1, text: 'Ho', completed: true },
    ]
    expect(Todos(before, action)).toEqual(after)
  })

  it('should return the initialState if action is undefined', () => {
    const before = [
      { id: 0, text: 'Hey', completed: false },
    ]

    const action = {}

    const after = [

      { id: 0, text: 'Hey', completed: false },
    ]
    expect(Todos(before, action)).toEqual(after)
  })

  it('should return the initialState if before is undefined', () => {
    const before = undefined

    const action = {}

    const after = initialState
    expect(Todos(before, action)).toEqual(after)
  })
})
