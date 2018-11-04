import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  @font-face {
    font-family: 'jianshu';  /* project id 890964 */
    src: url('//at.alicdn.com/t/font_890964_lbhnmxwwrch.eot');
    src: url('//at.alicdn.com/t/font_890964_lbhnmxwwrch.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_890964_lbhnmxwwrch.woff') format('woff'),
    url('//at.alicdn.com/t/font_890964_lbhnmxwwrch.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_890964_lbhnmxwwrch.svg#jianshu') format('svg');
  }

  .jianshu {
    font-family: "jianshu" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`
