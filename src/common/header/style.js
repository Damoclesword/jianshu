import React, { Component } from 'react'
import styled from 'styled-components'
import logoImage from '../../static/logo.png'
import Switch from '../switch'

export const HeaderWrapper = styled.div`
  box-sizing: border-box;
  position: fixed;
  height: 56px;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
  border-bottom: 1px solid #f0f0f0;
  margin: 0 auto;
  background-color: #fff;
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

  &:after {
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
  position: relative;

  & > .item {
    color: #333;
    padding: 19px 15px;
  }

  &:not(.active) > .item:hover {
    background-color: #f5f5f5;
  }

  &.search {
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

  & > i {
    font-size: 20px;
  }

  input.input-search:focus + & {
    background-color: #969696;
    border-radius: 50%;
    color: #fff !important;
  }
`
// HotSearch

const HotSearchWrapper = styled.div`
  position: absolute;
  width: 250px;
  left: 0;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);

  &:before {
    content: '';
    left: 27px;
    width: 10px;
    height: 10px;
    transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    top: -5px;
    z-index: -1;
    position: absolute;
    background-color: #fff;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  }

  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border: 12px solid transparent;
    border-bottom-color: #fff;
    left: 20px;
    bottom: 98%;
  }
`

const HotSearchTrending = styled.div`
  padding: 20px 20px 10px;
  margin-bottom: 1px solid #f0f0f0;
`

// Header
const HotSearchHeader = styled.div`
  font-size: 14px;
  height: 20px;
  line-height: 20px;
  margin-bottom: 10px;

  &:after {
    display: block;
    clear: both;
    height: 0;
    content: '';
    visibility: hidden;
    overflow: hidden;
  }

  & > .page-change {
    float: right;
    color: #969696;
    cursor: pointer;

    & i.icon-switch {
      display: inline-block;
      line-height: 1
      margin-right: 2px;
      font-size: 13px;
      transition: .5s ease;
      transform: rotate(0deg);
      transform-origin: center center;
    }

    &:hover {
      color: #000;
    }
  }
`

const HotSearchTitle = styled.div`
  float: left;
  color: #969696;
`

// Tags
const TagsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  overflow: hidden;
`

const Tag = styled.a.attrs({
  href: props => props.href || '',
})`
  padding: 3px 6px;
  font-size: 12px;
  line-height: 12px;
  color: #787878;
  border: 1px solid #ddd;
  border-radius: 3px;
  margin-right: 10px;
  margin-top: 5px;
  margin-bottom: 5px;

  &:hover,
  &:focus {
    color: #333;
    border-color: #b4b4b4;
  }
`

const Icon = (props) => {
  const { style } = props
  return (
    <i className="jianshu icon-switch" style={style || {}}>
      &#xe652;
    </i>
  )
}

// 完整热搜组件
class HotSearch extends Component {
  render() {
    const { list, handleMouseBehaviors, handleChangeListPage } = this.props
    return (
      <>
        {/* HotSearch */}
        <HotSearchWrapper
          onMouseEnter={handleMouseBehaviors.handleMouseEnter}
          onMouseLeave={handleMouseBehaviors.handleMouseLeave}
        >
          <HotSearchTrending>
            <HotSearchHeader>
              <HotSearchTitle>热门搜索</HotSearchTitle>
              <Switch
                className="page-change"
                handleSwitchClick={handleChangeListPage}
                Icon={Icon}
                text="换一批"
              />
            </HotSearchHeader>

            <TagsWrapper>
              {list.map(item => (
                <Tag key={item}>{item}</Tag>
              ))}
            </TagsWrapper>
          </HotSearchTrending>
        </HotSearchWrapper>
      </>
    )
  }
}

// 是否渲染热搜组件
const showHotSearchArea = (show, list, handleMouseBehaviors, handleChangeListPage) => {
  if (show.focused || show.mouseEnter) {
    return (
      <HotSearch
        list={list}
        handleMouseBehaviors={handleMouseBehaviors}
        handleChangeListPage={handleChangeListPage}
      />
    )
  }
  return <></>
}

// 完整的Search组件
export const NavSearch = (props) => {
  const {
    className,
    onSearchInputFocus,
    onSearchInputBlur,
    showHostSearchArea,
    hotSearchList,
    handleMouseEnter,
    handleMouseLeave,
    handleChangeListPage,
  } = props
  return (
    <ItemWrapper className={className}>
      <SearchInput onFocus={onSearchInputFocus} onBlur={onSearchInputBlur} />
      <SearchBtn>
        <i className="jianshu">&#xe6a2;</i>
      </SearchBtn>

      {showHotSearchArea(
        showHostSearchArea,
        hotSearchList,
        { handleMouseEnter, handleMouseLeave },
        handleChangeListPage,
      )}
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
