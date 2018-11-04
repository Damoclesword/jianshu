import React, { Component } from 'react'
import styled from 'styled-components'

export const HomeWrapper = styled.div.attrs({
  className: 'home-wrapper',
})`
  width: 960px;
  margin: 0 auto;
  box-sizing: border-box;

  &:after {
    display: block;
    content: '';
    clear: both;
    height: 0;
  }
`

export const HomeMain = styled.div`
  box-sizing: border-box;
  float: left;
  width: 640px;
  padding-top: 30px;
  padding-left: 15px;
`

export const HomeAside = styled.div`
  float: right;
  width: 280px;
  padding: 30px 0 0;
  margin-left: 40px;
`

// Topic Component styles
export const TopicWrapper = styled.div`
  padding: 20px 0 10px 0;
`

const TopicItemWrapper = styled.a.attrs({
  href: props => props.href || '#',
})`
  display: inline-block;
  margin: 0 18px 18px 0;
  min-height: 32px;
  background-color: #f7f7f7;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  vertical-align: top;
  overflow: hidden;
  cursor: pointer;

  & > img {
    width: 32px;
    height: 32px;
    vertical-align: middle;
  }

  & > .item-name {
    display: inline-block;
    padding: 0 11px 0 11px;
    font-size: 14px;
  }
}
`

export const TopicItem = (props) => {
  const {
    imgUrl, imgDesc, itemName, href,
  } = props
  return (
    <TopicItemWrapper href={href}>
      <img className="item-image" alt={imgDesc || '64'} src={imgUrl} />
      <div className="item-name">{itemName}</div>
    </TopicItemWrapper>
  )
}

export const MoreHotTopicItem = styled.a.attrs({
  href: '/',
})`
  display: inline-block;
  margin-top: 10px;
  font-size: 14px;
  color: #787878;

  & > i {
    vertical-align: -1px;
  }
`

// List Component styles
