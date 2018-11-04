import React, { Component } from 'react'
import { connect } from 'react-redux'
import { TopicWrapper, TopicItem, MoreHotTopicItem } from '../style'

class Topic extends Component {
  render() {
    const { topicItemList } = this.props
    return (
      <TopicWrapper>
        {topicItemList.map(item => (
          <TopicItem
            key={item.get('id')}
            href="#"
            imgUrl={item.get('imgUrl')}
            imgDesc="64"
            itemName={item.get('name')}
          />
        ))}
        <MoreHotTopicItem>
          更多热门专题
          <i className="jianshu">&#xe622;</i>
        </MoreHotTopicItem>
      </TopicWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  const homeState = state.get('home')
  return {
    topicItemList: homeState.get('topicItemList'),
  }
}

export default connect(mapStateToProps)(Topic)
