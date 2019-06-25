import path from 'path';
import webpack from 'webpack';

const __dirname = path.dirname(new URL(import.meta.url).pathname);

export default{
  mode: 'none',
  devtool: 'inline-source-map',
  entry: [
    path.resolve('src/index')
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.mjs'
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug: true,
      noInfo: false
    })
  ],
  module: {
    rules: [{
      test: /\.js$/,
      enforce: "pre",
      exclude: /node_modules/,
      loaders: ['babel-loader']
    },
    
    {
      //It's not longer allowed to omit the -loader suffix when using loaders.
      test: /\.css$/,
      loaders: ['style-loader','css-loader']
    }]
  }
}