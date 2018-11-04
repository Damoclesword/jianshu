import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './common/header'
import Home from './pages/home'
import Detail from './pages/detail'
import store from './store/index'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Header />

            <Route path="/" component={Home} />
            <Route path="/detail" component={Detail} />
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App
