import { fromJS } from 'immutable'
import * as constants from './constants'

const defaultState = fromJS({
  topicItemList: [
    {
      id: 1,
      imgUrl:
        'https://upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64',
      name: '简书电影',
    },
    {
      id: 2,
      imgUrl:
        'https://upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64',
      name: '读书',
    },
    {
      id: 3,
      imgUrl:
        'https://upload.jianshu.io/collections/images/83/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64',
      name: '摄影',
    },
    {
      id: 4,
      imgUrl:
        'https://upload.jianshu.io/collections/images/95/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64',
      name: '故事',
    },
    {
      id: 5,
      imgUrl:
        'https://upload.jianshu.io/collections/images/76/12.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64',
      name: '自然科普',
    },
    {
      id: 6,
      imgUrl:
        'https://upload.jianshu.io/collections/images/14/6249340_194140034135_2.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64',
      name: '@IT·互联网',
    },
  ],
})

export default (state, action) => {
  if (!state) return defaultState
  switch (action.type) {
    default:
      return state
  }
}
