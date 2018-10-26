module.exports = {
  extends: 'airbnb',
  env: {
    browser: true,
  },
  plugins: ['react', 'jsx-a11y', 'import'],
  rules: {
    // React has JSX in JS files
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],

    // React includes images via require("../images/example.png")
    'global-require': 0,

    //是否有分号
    semi: [2, 'never'],

    /**
     * 要求是否为纯组件
     * doc: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
     */
    'react/prefer-stateless-function': [0],

    /**
     * props校验检查
     * doc: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
     */
    'react/prop-types': [0],
  },
}
