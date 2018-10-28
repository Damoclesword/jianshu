import React, { Component } from 'react'
import { connect } from 'react-redux'
// import styled components
import {
  HeaderWrapper, Logo, Container, Nav, NavItem, NavSearch, Addition, Button,
} from './style'
// import actions
import { actionCreators } from './store'

class Header extends Component {
  render() {
    const {
      handleSearchFocus,
      handleSearchBlur,
      handleMouseEnter,
      handleMouseLeave,
      handleChangeListPage,
      focused,
      mouseEnter,
      list,
      page,
    } = this.props
    return (
      <HeaderWrapper>
        <Logo href="/" />
        <Container>
          <Nav>
            <NavItem
              className="left active"
              name="首页"
              icon={<i className="jianshu icon-index">&#xe601;</i>}
              href="/"
            />
            <NavItem
              className="left"
              name="下载App"
              icon={<i className="jianshu icon-app">&#xe7fd;</i>}
              href="#"
            />
            <NavSearch
              className="left search"
              onSearchInputFocus={handleSearchFocus}
              onSearchInputBlur={handleSearchBlur}
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
              handleChangeListPage={handleChangeListPage}
              showHostSearchArea={{ focused, mouseEnter }}
              hotSearchList={list.slice(page * 10, page * 10 + 10)}
            />
          </Nav>
        </Container>
        <Addition>
          <Button href="#" className="btn post">
            <i className="jianshu icon-post">&#xed10;</i>
            写文章
          </Button>
          <Button href="#" className="btn register">
            注册
          </Button>
          <Button href="#" className="common">
            登录
          </Button>
          <Button href="#" className="common">
            <i className="jianshu icon-mode">&#xe635;</i>
          </Button>
        </Addition>
      </HeaderWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  const headerState = state.get('header')
  return {
    focused: headerState.get('focused'),
    mouseEnter: headerState.get('mouseEnter'),
    list: headerState.get('list'),
    page: headerState.get('listPage'),
    totalPage: headerState.get('totalListPage'),
  }
}

const mapDispatchToProps = dispatch => ({
  handleSearchFocus: () => {
    dispatch(actionCreators.getHotSearchList())
    dispatch(actionCreators.inputFocusedChange(true))
  },

  handleSearchBlur: () => {
    dispatch(actionCreators.inputFocusedChange(false))
  },

  handleMouseEnter: () => {
    dispatch(actionCreators.mouseBehaviorsHotList(true))
  },

  handleMouseLeave: () => {
    dispatch(actionCreators.mouseBehaviorsHotList(false))
  },

  handleChangeListPage: () => {
    dispatch(actionCreators.changeListPage())
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header)
