export const createReducer =
  (initialState: any, handleActions: any) =>
    (state: any = initialState, action: any) =>
      handleActions(action.type)
        ? handleActions[action.type](state, action)
        : state

/* export const createReducer = */
/*   (initialState: any, handleActions: any) => */
/*   (state: any = initialState, action: any) => */
/*     handleActions.hasOwnProperty(action.type) */
/*       ? handleActions[action.type](state, action) */
/*       : state */
