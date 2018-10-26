import React from 'react'
import styled from 'styled-components'
import logoImage from '../../static/logo.png'

export const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
  border-bottom: 1px solid #f0f0f0;
  margin: 0 auto;
`

// Logo Component

const Image = styled.img.attrs({
  src: `${logoImage}`,
})`
  height: 100%;
  vertical-align: middle;
`

const LogoWrapper = styled.a`
  padding: 0;
  float: left;
  height: 56px;
`

export const Logo = props => (
  <LogoWrapper {...props}>
    <Image />
  </LogoWrapper>
)

// Container Component
export const Container = styled.div`
  width: 960px;
  margin-right: auto;
  margin-left: auto;
  padding-left: 15px;
  padding-right: 15px;
`

export const Nav = styled.ul`
  margin: 0;

  ::after {
    display: block;
    clear: both;
    height: 0;
    content: '';
    visibility: hidden;
    overflow: hidden;
  }
`

const ItemWrapper = styled.li`
  font-size: 17px;
  margin: 0 8px;
  line-height: 56px;

  & > .item {
    color: #333;
    padding: 20px 15px;
    height: 56px;
  }

  &:not(.active) > .item:hover {
    background-color: #f5f5f5;
  }

  &.search {
    position: relative;
    margin-left: 15px;
  }

  &.left {
    float: left;
  }

  &.active > .item {
    color: #ea6f5a;
  }

  & .icon-index,
  & .icon-app {
    margin-right: 3px;
    font-size: 20px;
    vertical-align: -2px;
  }
`

export const NavItem = (props) => {
  const {
    href, name, className, icon,
  } = props
  return (
    <ItemWrapper className={className}>
      <a className="item" href={href}>
        {icon}
        {name}
      </a>
    </ItemWrapper>
  )
}

const SearchInput = styled.input.attrs({
  placeholder: '搜索',
  className: 'input-search',
})`
  padding: 0 40px 0 20px;
  width: 240px;
  box-sizing: border-box;
  height: 38px;
  font-size: 14px;
  border: 1px solid #eee;
  border-radius: 40px;
  background: #eee;
  transition: width 0.5s;
  -moz-transition: width 0.5s;
  -webkit-transition: width 0.5s;
  -o-transition: width 0.5s;
  transition-delay: 0.1s;
  -moz-transition-delay: 0.1s;
  -webkit-transition-delay: 0.1s;
  -o-transition-delay: 0.1s;

  &::placeholder {
    color: #999;
  }

  &:focus {
    transition-delay: 0s;
    -moz-transition-delay: 0s;
    -webkit-transition-delay: 0s;
    -o-transition-delay: 0s;
    width: 320px;
    outline: none;
  }
`

const SearchBtn = styled.a.attrs({
  className: 'search-btn',
})`
  position: absolute;
  top: 14px;
  right: 5px;
  width: 30px;
  height: 30px !important;
  line-height: 30px !important;
  padding: 0 !important;
  color: #969696 !important;
  text-align: center;
  cursor: pointer;

  & > i {
    font-size: 20px;
  }

  input.input-search:focus + & {
    background-color: #969696;
    border-radius: 50%;
    color: #fff !important;
  }
`

export const NavSearch = (props) => {
  const { className, onSearchInputFocus, onSearchInputBlur } = props
  return (
    <ItemWrapper className={className}>
      <SearchInput onFocus={onSearchInputFocus} onBlur={onSearchInputBlur} />
      <SearchBtn>
        <i className="jianshu">&#xe6a2;</i>
      </SearchBtn>
    </ItemWrapper>
  )
}

// Addition Component
export const Addition = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 56px;
`

export const Button = styled.a.attrs({
  href: props => props.href,
})`
  display: inline-block;
  box-sizing: border-box;
  float: right;
  font-size: 15px;
  font-weight: 400px;
  line-height: 23px;
  padding: 6px 12px;
  text-align: center;
  vertical-align: middle;

  &.btn {
    width: 80px;
    height: 38px;
    border-radius: 19px;
    border: 1px solid #ea6f5a;
  }

  &.register {
    margin: 9px 5px 0 15px;
    color: #ea6f5a;
  }

  &.register:hover {
    color: #ec6149;
    border-color: #ec6149;
    background-color: rgba(236, 97, 73, 0.05);
  }

  &.post {
    width: 100px;
    margin: 9px 15px 0 15px;
    background-color: #ea6f5a;
    color: #fff;
  }

  &.post:hover {
    color: #fff;
    background-color: #ec6149;
  }

  &.post .icon-post {
    margin-right: 5px;
  }

  &.common {
    border: none;
    color: #969696;
    margin: 11px 6px 0 10px;
  }

  &.common .icon-mode {
    font-size: 22px;
  }
`
