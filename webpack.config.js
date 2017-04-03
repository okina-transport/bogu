const path = require('path');
const webpack = require('webpack');

const TARGET = process.env.npm_lifecycle_event;
process.env.BABEL_ENV = TARGET;

if(TARGET === 'build') {
  module.exports = {
    devtool: 'inline-source-map',
    entry: {
      index: [
        './src/components',
        //'./src/containers',
      ],
      utils: './src/utils',
      styles: './src/styles',
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    module: {
      loaders: [
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          include: [
            path.resolve(__dirname, 'src/components'),
            //path.resolve(__dirname, 'src/containers'),
            path.resolve(__dirname, 'src/styles'),
            path.resolve(__dirname, 'src/utils'),
          ],
          loader: 'babel-loader'
        }
      ]
    },
    externals: [{
      react: 'react',
      moment: 'moment',
    }],
    output: {
      filename: '[name].js',
      libraryTarget: 'umd',
      library: 'bogu'
    },
    plugins: [
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production')
        }
      })
    ]
  };
}

if(TARGET === 'dev') {
  const hostname = process.env.HOST || '127.0.0.1';
  const port = process.env.PORT || 9000;

  module.exports = {
    devtool: 'inline-source-map',
    entry: [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://' + hostname + ':' + port,
      'webpack/hot/only-dev-server',
      './app/index.js',
    ],
    output: {
      path: path.resolve(__dirname, '/public/'),
      filename: 'bundle.js',
      publicPath: '/'
    },
    context: path.resolve(__dirname, '.'),
    resolve: {
      extensions: ['.js', '.jsx']
    },
    module: {
      loaders: [
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          include: __dirname,
          loader: ['babel-loader']
        }
      ]
    },
    devServer: {
      contentBase: path.resolve(__dirname, 'public'),
      hot: true,
      host: hostname,
      port: port
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  };
}
