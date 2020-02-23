import path from 'path'

const commonConfig = () => ({
  entry: ['@babel/polyfill', './src/index.ts'],
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
      configPath: path.resolve('config')
    },
    extensions: ['.tsx', '.ts', '.js', '.json'],
    modules: [path.resolve('node_modules'), path.resolve('src')]
  }
})

export default commonConfig
