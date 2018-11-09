import React, { Component } from 'react'
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import { HomeWrapper, HomeMain, HomeAside } from './style'

class Home extends Component {
  render() {
    return (
      <div>
        <HomeWrapper>
          <HomeMain>
            <Topic />
            <List />
          </HomeMain>
          <HomeAside>
            <Recommend />
            <Writer />
          </HomeAside>
        </HomeWrapper>
      </div>
    )
  }
}

export default Home
