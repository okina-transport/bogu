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
            path.resolve(__dirname, 'src'),
            path.resolve(__dirname, 'src/components'),
            //path.resolve(__dirname, 'src/containers'),
            path.resolve(__dirname, 'src/styles'),
            path.resolve(__dirname, 'src/utils'),
          ],
          loader: 'babel-loader',
          query: {
            presets: ['es2015', 'react', 'stage-0'],
            plugins: ['transform-runtime'],
          }
        }
      ]
    },
    externals: [{
      react: 'react',
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

