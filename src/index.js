import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import GlobalStyle from './style'
import IconFontStyle from './static/iconfont/iconfont'

ReactDOM.render(
  <>
    <App />
    <GlobalStyle />
    <IconFontStyle />
  </>,
  document.getElementById('root'),
)
