const path = require('path')

module.exports = {
  entry: {
    pf: path.resolve(__dirname, 'src/index.ts')
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.ts']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ['ts-loader']
      }
    ]
  }
}