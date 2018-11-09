import { fromJS } from 'immutable'

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
  recommendWriter: {
    users: [
      {
        id: 4802366,
        slug: '13cba2dc6b23',
        nickname: '汪波_偶遇科学',
        avatar_source:
          'http://upload.jianshu.io/users/upload_avatars/4802366/4f86b75d-b61b-4126-8be4-87a151c9cd28.jpg',
        total_likes_count: 1262,
        total_wordage: 254659,
        is_following_user: false,
      },
      {
        id: 3343569,
        slug: 'b3b2c03354f3',
        nickname: '吴晓布',
        avatar_source:
          'http://upload.jianshu.io/users/upload_avatars/3343569/3cd46650-54bc-4383-989f-80aacb0c42fe.jpg',
        total_likes_count: 15282,
        total_wordage: 609237,
        is_following_user: false,
      },
      {
        id: 10849033,
        slug: '62eb2baf2c62',
        nickname: 'lostdays',
        avatar_source:
          'http://upload.jianshu.io/users/upload_avatars/10849033/a3e12f47-c81c-4659-9c80-117f8b337408.jpg',
        total_likes_count: 1269,
        total_wordage: 168071,
        is_following_user: false,
      },
      {
        id: 3730494,
        slug: 'ffc565d738a3',
        nickname: '格列柯南',
        avatar_source:
          'http://upload.jianshu.io/users/upload_avatars/3730494/4a86a2a7-d5b9-47f1-969a-d8ef4711488b.jpg',
        total_likes_count: 14849,
        total_wordage: 620927,
        is_following_user: false,
      },
      {
        id: 12665193,
        slug: '757b5f9f910b',
        nickname: '宇文歡',
        avatar_source:
          'http://upload.jianshu.io/users/upload_avatars/12665193/828a449f-efbb-4540-b0af-f6c314810515.jpg',
        total_likes_count: 1056,
        total_wordage: 179934,
        is_following_user: false,
      },
      {
        id: 6305091,
        slug: '4ce7aca123a3',
        nickname: '只有一半影子的人',
        avatar_source:
          'http://upload.jianshu.io/users/upload_avatars/6305091/dc5b863a-26fc-47df-af32-18177f6cc9ff.jpg',
        total_likes_count: 737,
        total_wordage: 244475,
        is_following_user: false,
      },
      {
        id: 2558050,
        slug: 'd99a7dfae9e4',
        nickname: '阿栈',
        avatar_source:
          'http://upload.jianshu.io/users/upload_avatars/2558050/7761b285-2805-4534-9870-ba7dcc7538ec.jpg',
        total_likes_count: 705,
        total_wordage: 391907,
        is_following_user: false,
      },
      {
        id: 8781442,
        slug: '2399ca214fbd',
        nickname: '胡七筒',
        avatar_source:
          'http://upload.jianshu.io/users/upload_avatars/8781442/79bf6acc-5dd3-49d1-9e2b-6c58066c1442.jpg',
        total_likes_count: 9526,
        total_wordage: 235303,
        is_following_user: false,
      },
      {
        id: 13213889,
        slug: '080bb4eac1c9',
        nickname: '无限猴子',
        avatar_source:
          'http://upload.jianshu.io/users/upload_avatars/13213889/7314c5cc-ca7f-4542-b914-2c8dffaf324d.jpg',
        total_likes_count: 318,
        total_wordage: 100746,
        is_following_user: false,
      },
      {
        id: 5545154,
        slug: '898bb4ca481d',
        nickname: '徐林Grace',
        avatar_source:
          'http://upload.jianshu.io/users/upload_avatars/5545154/1a3d5ed6-9ad1-44b3-9457-3e6a29dd1b71.jpg',
        total_likes_count: 4582,
        total_wordage: 542767,
        is_following_user: false,
      },
      {
        id: 2998364,
        slug: '92eb338437ee',
        nickname: '道长是名思维贩子',
        avatar_source: 'http://upload.jianshu.io/users/upload_avatars/2998364/9f8351c3734b.jpg',
        total_likes_count: 48037,
        total_wordage: 190040,
        is_following_user: false,
      },
      {
        id: 5205317,
        slug: 'dbfdce352c0d',
        nickname: '遛遛心情的溜妈',
        avatar_source:
          'http://upload.jianshu.io/users/upload_avatars/5205317/1179d71b-e7c6-4023-89e8-bba25f88272b.jpg',
        total_likes_count: 2104,
        total_wordage: 526487,
        is_following_user: false,
      },
      {
        id: 3884693,
        slug: 'b6608e27dc74',
        nickname: '王诗翔',
        avatar_source:
          'http://upload.jianshu.io/users/upload_avatars/3884693/b425c707-d998-46a6-98b1-9b1e241513c3.jpg',
        total_likes_count: 1778,
        total_wordage: 442347,
        is_following_user: false,
      },
      {
        id: 3627484,
        slug: 'c5580cc1c3f4',
        nickname: '简书大学堂',
        avatar_source:
          'http://upload.jianshu.io/users/upload_avatars/3627484/eb973bb9-37ba-4d07-acec-850c0a66d1bb.png',
        total_likes_count: 24647,
        total_wordage: 1387880,
        is_following_user: false,
      },
      {
        id: 2844887,
        slug: '28b0d7887971',
        nickname: '红瑀',
        avatar_source:
          'http://upload.jianshu.io/users/upload_avatars/2844887/cf3b6f90-774a-4ea7-9e59-b29f2f4b7ad6.jpg',
        total_likes_count: 10827,
        total_wordage: 311222,
        is_following_user: false,
      },
      {
        id: 3136195,
        slug: '6810a6332de9',
        nickname: '梅拾璎',
        avatar_source: 'http://upload.jianshu.io/users/upload_avatars/3136195/484e32c3504a.jpg',
        total_likes_count: 20936,
        total_wordage: 233949,
        is_following_user: false,
      },
      {
        id: 11557689,
        slug: '08e6960f7ed9',
        nickname: '须僧',
        avatar_source:
          'http://upload.jianshu.io/users/upload_avatars/11557689/ed2ea7f3-9d7d-41fc-a05a-daebb8097b0c.jpg',
        total_likes_count: 6638,
        total_wordage: 292610,
        is_following_user: false,
      },
      {
        id: 1835526,
        slug: '55b597320c4e',
        nickname: '行距版君',
        avatar_source:
          'http://upload.jianshu.io/users/upload_avatars/1835526/83d24e1a-0a0f-43f6-8a1d-289be6101e73.png',
        total_likes_count: 44185,
        total_wordage: 499000,
        is_following_user: false,
      },
      {
        id: 8972166,
        slug: 'b91cc2d507d0',
        nickname: '冰千里',
        avatar_source:
          'http://upload.jianshu.io/users/upload_avatars/8972166/065e6770-aacc-4365-9abf-c46a59cdf7f6.jpg',
        total_likes_count: 6833,
        total_wordage: 432695,
        is_following_user: false,
      },
      {
        id: 2564926,
        slug: '631131ed01af',
        nickname: '王老师八卦美术史',
        avatar_source: 'http://upload.jianshu.io/users/upload_avatars/2564926/88bfdbeeb083.jpg',
        total_likes_count: 894,
        total_wordage: 137604,
        is_following_user: false,
      },
    ],
    total_count: 20,
  },
})

export default (state, action) => {
  if (!state) return defaultState
  switch (action.type) {
    default:
      return state
  }
}
