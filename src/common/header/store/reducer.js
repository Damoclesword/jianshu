import * as constants from './constants'

const defaultState = {
  focused: false,
}

export default (state, action) => {
  if (!state) return defaultState
  switch (action.type) {
    case constants.INPUT_FOCUSED_CHANGE:
      return {
        ...state,
        focused: action.focused,
      }
    default:
      return state
  }
}
