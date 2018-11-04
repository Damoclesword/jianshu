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
    {
      id: 7,
      imgUrl:
        'https://upload.jianshu.io/collections/images/13/%E5%95%8A.png?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64',
      name: '旅行·在路上',
    },
  ],
  noteList: [
    {
      id: 1,
      imgUrl:
        'https://upload-images.jianshu.io/upload_images/13346781-3e1a45412d9fd713.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240',
      title: '仓央嘉措',
      abstract:
        '梦里依稀 今又相见 一卷经书 一袭袈裟 一叶菩提 一朵莲花 青春的喇嘛 谁懂你青涩的压抑 布达拉宫的经筒 转不动你倾世的爱恋 法号声声 驱不走玛...',
      nickname: '仓央嘉措本人',
      comment: '11',
      like: '99',
    },
    {
      id: 2,
      imgUrl:
        'https://upload-images.jianshu.io/upload_images/14416722-52868502dcd2f61d?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240',
      title: '虎牙5000万签下的莉哥终于凉凉，回顾一下她的“传奇”人生',
      abstract:
        '爱刷抖音的小伙伴应该对莉哥（原名：杨凯莉）都不陌生，她曾经在快手录制小视频，后来随着抖音大火转战抖音，因为一首《让我做你的眼睛》大火，独特的烟嗓...',
      nickname: '大嬉大悲',
      comment: '11',
      like: '99',
    },
    {
      id: 3,
      title: '江湖已远，侠义永存',
      abstract:
        '惊闻金庸先生离世，内心不胜悲戚。 自儿时起，便与金氏武侠相伴，一个个耳熟能详的侠义故事，犹如一幅幅精美绝伦的画卷，鲜明地印在脑海。 闭上眼，任画...',
      nickname: '唐小痴',
      comment: '11',
      like: '99',
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
