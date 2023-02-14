module.exports = {
  parser: '@babel/eslint-parser',
  extends: 'airbnb-base',
  parserOptions: {
    requireConfigFile: false,
  },
  env: {
    browser: true,
    node: true,
  },
  rules: {
    'global-require': 0,
    'arrow-parens': 0,
  },
};
