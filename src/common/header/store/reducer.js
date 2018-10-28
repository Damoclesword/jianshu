import { fromJS } from 'immutable'
import * as constants from './constants'

const defaultState = fromJS({
  focused: false,
  mouseEnter: false,
  list: [],
  listPage: 0,
  totalListPage: 1,
})

export default (state, action) => {
  if (!state) return defaultState
  switch (action.type) {
    case constants.INPUT_FOCUSED_CHANGE:
      return state.set('focused', action.focused)
    case constants.CHANGE_LIST:
      return state.merge({
        list: action.list,
        totalListPage: action.totalListPage,
      })
    case constants.MOUSE_BEHAVIORS_HOT_LIST:
      return state.set('mouseEnter', action.isEnter)
    case constants.CHANGE_LIST_PAGE:
      return state.set('listPage', action.page)
    default:
      return state
  }
}
