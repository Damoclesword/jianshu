const defaultState = {
  focused: false,
}

const INPUT_FOCUSED_CHANGE = 'input_focused_change'

export default (state, action) => {
  if (!state) return defaultState
  switch (action) {
    case INPUT_FOCUSED_CHANGE:
      return {
        ...state,
        focused: action.focused,
      }
    default:
      return state
  }
}

export const inputFocusedChange = focused => ({
  type: INPUT_FOCUSED_CHANGE,
  focused,
})
