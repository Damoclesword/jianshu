import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  WriterWrapper,
  HeaderTitle,
  WriterListWrapper,
  WriterListItem,
  FindMoreButton,
} from '../style'

class Writer extends Component {
  constructor() {
    super()
    this.state = {
      currentPage: 0,
      totalPage: 0,
    }
  }

  componentWillMount() {
    const { totalCount } = this.props
    this.setState({
      totalPage: Math.round(totalCount / 5),
    })
  }

  _setCurrentPage = (page) => {
    this.setState({
      currentPage: page,
    })
  }

  handleSwitchClick = () => {
    const { currentPage, totalPage } = this.state
    if (currentPage < totalPage - 1) {
      this._setCurrentPage(currentPage + 1)
    } else {
      this._setCurrentPage(0)
    }
  }

  render() {
    const { writers } = this.props
    const { currentPage } = this.state
    return (
      <WriterWrapper>
        <HeaderTitle handleSwitchClick={this.handleSwitchClick} />
        <WriterListWrapper>
          {writers.slice(currentPage * 5, currentPage * 5 + 5).map(user => (
            <WriterListItem
              key={user.get('id')}
              href="/"
              avatarUrl={user.get('avatar_source')}
              name={user.get('nickname')}
              desc={`写了${(user.get('total_wordage') / 1000).toFixed(1)}k字 · ${(
                user.get('total_likes_count') / 1000
              ).toFixed(1)}k喜欢`}
            />
          ))}
        </WriterListWrapper>
        <FindMoreButton href="/">
          查看全部
          <i className="jianshu">&#xe622;</i>
        </FindMoreButton>
      </WriterWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  const homeState = state.get('home')
  return {
    writers: homeState.getIn(['recommendWriter', 'users']),
    totalCount: homeState.getIn(['recommendWriter', 'total_count']),
  }
}

export default connect(mapStateToProps)(Writer)
