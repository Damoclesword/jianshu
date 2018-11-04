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
  position: relative;
  float: right;
  width: 280px;
  padding: 30px 0 0;
  margin-left: 40px;
`

// Topic Component styles
export const TopicWrapper = styled.div`
  padding: 20px 0 20px 0;
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
export const ListWrapper = styled.div`
  & > .row-line {
    margin: -5px 0 15px;
    border-top: 1px solid #f0f0f0;
  }
`

const ListItemWrapper = styled.div.attrs({
  className: 'content-wrapper',
})`
  position: relative;
  width: 100%;
  margin: 0 0 15px;
  padding: 15px 2px 20px 0;
  border-bottom: 1px solid #f0f0f0;
  word-wrap: break-word;

  & > .wrap-img {
    position: absolute;
    top: 52%;
    margin-top: -60px;
    right: 0;
    width: 125px;
    height: 100px;

    & > img {
      width: 100%;
      height: 100%;
      border-radius: 4px;
      border: 1px solid #f0f0f0;
    }
  }

  & > .wrap-img-hide {
    display: none;
  }

  & > .content {
    padding-right: 140px;
  }
`

const ListItemTitle = styled.a.attrs({})`
  margin: -7px 0 4px;
  display: inherit;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.5;

  &:hover {
    text-decoration: underline;
  }
`

const ListItemAbstract = styled.p`
  margin: 0 0 8px;
  font-size: 13px;
  line-height: 24px;
  color: #999;
`

const ListItemMeta = styled.div`
  padding-right: 0 !important;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;

  & > a:hover {
    color: #787878;
  }

  & > a,
  & > span {
    margin-right: 10px;
    color: #b4b4b4;
    transition: 0.1s ease-in;
    -webkit-transition: 0.1s ease-in;
    -moz-transition: 0.1s ease-in;
    -o-transition: 0.1s ease-in;
    -ms-transition: 0.1s ease-in;
  }

  & > a > i {
    font-size: 17px;
    vertical-align: -2px;
  }

  & > span > i {
    font-size: 13px;
    margin-right: 2px;
    vertical-align: -1px !important;
  }
`

export const ListItemContent = (props) => {
  const {
    title, abstract, imgUrl, nickname, comment, like,
  } = props
  return (
    <ListItemWrapper>
      <a className={imgUrl ? 'wrap-img' : 'wrap-img-hide'} href="/">
        <img className="content-image" src={imgUrl} alt={title} />
      </a>
      <div className="content">
        <ListItemTitle>{title}</ListItemTitle>
        <ListItemAbstract>{abstract}</ListItemAbstract>
        <ListItemMeta>
          <a className="nickname" href="/">
            {nickname}
          </a>
          <a className="comment" href="/">
            <i className="jianshu">&#xe6f9;</i>
            {comment}
          </a>
          <span className="like">
            <i className="jianshu">&#xe60e;</i>
            {like}
          </span>
        </ListItemMeta>
      </div>
    </ListItemWrapper>
  )
}

// Recommend
const RecommendWrapper = styled.div`
  margin-top: -4px;
  padding-bottom: 4px;
  min-height: 228px;
`

const RecommendItem = styled.a.attrs({
  href: props => props.href || '/',
})`
  & > img {
    width: 100%;
    min-height: 50px;
    margin-bottom: 3px;
    border-radius: 4px;
  }
`

const QcodeWrapper = styled.a.attrs({
  href: props => props.href || '/',
})`
  position: relative;
  display: block;
  margin-bottom: 30px;
  padding: 10px 22px;
  width: 100%;
  border: 1px solid #f0f0f0;
  border-radius: 6px;
  background-color: #fff;

  & > img {
    width: 60px;
    height: 60px;
    opacity: 0.85;
    vertical-align: middle;
  }

  & > .info {
    display: inline-block;
    vertical-align: middle;
    margin-left: 14px;

    & > .title {
      font-size: 15px;
      color: #333;

      & > i {
        vertical-align: -1px;
      }
    }

    & > .description {
      margin-top: 10px;
      font-size: 13px;
      color: #999;
    }
  }

  &:hover ~ .popover {
    opacity: 1;
    z-index: 1000;
  }
`

const PopQcode = styled.div.attrs({
  className: 'popover',
})`
  position: absolute;
  top: 118px;
  left: 49px;
  border: 1px solid #737574;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 2px 2px 15px 0px #9fa19f;
  opacity: 0;
  z-index: -1;
  transition: 0.4s ease;
  -webkit-transition: 0.4s ease;
  -moz-transition: 0.4s ease;
  -o-transition: 0.4s ease;
  -ms-transition: 0.4s ease;

  & > img {
    width: 180px;
    padding: 10px;
    vertical-align: middle;
  }

  &:before {
    position: absolute;
    content: '';
    display: block;
    width: 0;
    height: 0;
    border-left: 11px solid transparent;
    border-right: 11px solid transparent;
    border-top: 13px solid #9fa19f;
    bottom: -13px;
    left: 79px;
  }

  &:after {
    position: absolute;
    content: '';
    display: block;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 12px solid white;
    bottom: -12px;
    left: 80px;
  }
`

export const Qcode = () => (
  <>
    <QcodeWrapper>
      <img
        alt="Download index side qrcode"
        src="https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png"
      />
      <div className="info">
        <div className="title">
          下载简书手机App
          <i className="jianshu">&#xe622;</i>
        </div>
        <div className="description">随时随地发现和创作内容</div>
      </div>
    </QcodeWrapper>
    <PopQcode>
      <img
        alt="Download index side qrcode"
        src="https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png"
      />
    </PopQcode>
  </>
)

export const Recommend = () => (
  <RecommendWrapper>
    <RecommendItem>
      <img
        src="https://cdn2.jianshu.io/assets/web/banner-s-3-7123fd94750759acf7eca05b871e9d17.png"
        alt="Banner_1"
      />
    </RecommendItem>
    <RecommendItem>
      <img
        src="https://cdn2.jianshu.io/assets/web/banner-s-4-b70da70d679593510ac93a172dfbaeaa.png"
        alt="Banner_2"
      />
    </RecommendItem>
    <RecommendItem>
      <img
        src="https://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png"
        alt="Banner_3"
      />
    </RecommendItem>
    <RecommendItem>
      <img
        src="https://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png"
        alt="Banner_4"
      />
    </RecommendItem>
    <RecommendItem>
      <img
        src="https://cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png"
        alt="Banner_5"
      />
    </RecommendItem>
  </RecommendWrapper>
)
