module.exports = {
  env: {
    // browser: true,
    // es6: true
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,    
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["react", "react-hooks"],
  rules: {
    "react/prop-types": 0,
    "react/display-name": 0,
    "react-hooks/rules-of-hooks": "error",
    
    "react-hooks/exhaustive-deps": "warn",
    //"react-hooks/exhaustive-deps": "error",

    "no-unused-vars": ["error", { varsIgnorePattern: "React" }]
  }
};
