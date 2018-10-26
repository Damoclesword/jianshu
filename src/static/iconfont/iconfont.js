import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  @font-face {
    font-family: "jianshu";
    src: url("./iconfont.eot?t=1540530871336"); /* IE9*/
    src: url("./iconfont.eot?t=1540530871336#iefix") format("embedded-opentype"),
      /* IE6-IE8 */
        url("data:application/x-font-woff;charset=utf-8;base64,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")
        format("woff"),
      url("./iconfont.ttf?t=1540530871336") format("truetype"),
      /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
        url("./iconfont.svg?t=1540530871336#jianshu") format("svg"); /* iOS 4.1- */
  }

  .jianshu {
    font-family: "jianshu" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .icon-icon_font:before {
    content: "\e635";
  }

  .icon-search:before {
    content: "\e6a2";
  }

  .icon-icondiscover:before {
    content: "\e601";
  }

  .icon-quill-plus:before {
    content: "\ed10";
  }

  .icon-APP:before {
    content: "\e7fd";
  }
`
