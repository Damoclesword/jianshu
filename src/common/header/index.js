import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
// import styled components
import {
  HeaderWrapper, Logo, Container, Nav, NavItem, NavSearch, Addition, Button,
} from './style'
// import actions
import { inputFocusedChange } from '../../store/reducer'

const Header = (props) => {
  const { handleSearchFocusChange } = props
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
            onSearchInputFocus={() => handleSearchFocusChange(true)}
            onSearchInputBlur={() => handleSearchFocusChange(false)}
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

const mapStateToProps = state => ({
  focused: state.focused,
})

const mapDispatchToProps = dispatch => ({
  handleSearchFocusChange: (focused) => {
    dispatch(inputFocusedChange(focused))
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header)
