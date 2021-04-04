module.exports = api => {
  const isTest = api.env('test')
  if (isTest) { // For Jest
    return {
      presets: [
        "@babel/preset-react",
        "@babel/preset-typescript",
        "@babel/preset-env"
      ]
    }
  }
}
