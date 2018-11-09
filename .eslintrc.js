module.exports = {
  parser: "babel-eslint",
  extends: "airbnb",
  env: {
    browser: true
  },
  plugins: ["react", "jsx-a11y", "import"],
  rules: {
    // React has JSX in JS files
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],

    // React includes images via require("../images/example.png")
    "global-require": 0,

    //是否有分号
    semi: ["error", "never"],

    /**
     * 要求是否为纯组件
     * doc: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
     */
    "react/prefer-stateless-function": [0],

    /**
     * props是否有校验检查
     * doc: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
     */
    "react/prop-types": [0],
    /**
     * 是否禁止悬空下划线的使用
     * https://cn.eslint.org/docs/rules/no-underscore-dangle
     */
    "no-underscore-dangle": 0
  }
};
