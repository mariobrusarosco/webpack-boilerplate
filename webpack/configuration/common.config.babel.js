import path from 'path'

const developmentConfig = () => ({
  entry: ['@babel/polyfill', './src/index.js'],
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
      configPath: path.resolve('config')
    },
    modules: [path.resolve('node_modules'), path.resolve('src')]
  }
})

export default developmentConfig
