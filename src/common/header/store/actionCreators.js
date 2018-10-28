import axios from 'axios'
import { fromJS } from 'immutable'
import * as constants from './constants'

export const inputFocusedChange = focused => ({
  type: constants.INPUT_FOCUSED_CHANGE,
  focused,
})

const changeList = list => ({
  type: constants.CHANGE_LIST,
  list: fromJS(list),
  totalListPage: Math.ceil(list.length / 10),
})

export const getHotSearchList = () => (dispatch) => {
  axios.get('/api/headList.json').then(
    (res) => {
      const { data } = res
      dispatch(changeList(data.data))
    },
    () => {},
  )
}

export const mouseBehaviorsHotList = isEnter => ({
  type: constants.MOUSE_BEHAVIORS_HOT_LIST,
  isEnter,
})

export const changeListPage = page => ({
  type: constants.CHANGE_LIST_PAGE,
  page,
})
