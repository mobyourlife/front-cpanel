const path = require('path')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TransformRuntimePlugin = require('babel-plugin-transform-runtime')
const ReactHotLoaderPlugin = require('react-hot-loader/babel')

const BUILDING = process.env.npm_lifecycle_event === 'build'

let config = {
  entry: (function () {
    let ret = []
    ret.push('react-hot-loader/patch')

    if (!BUILDING) {
      ret.push(
        'webpack-dev-server/client?http://localhost:7000',
        'webpack/hot/only-dev-server'
      )
    }

    ret.push(
      'babel-polyfill',
      './index.js'
    )

    return ret
  })(),
  devServer: {
    hot: true,
    port: 7000,
    historyApiFallback: true,
    contentBase: './public'
  },
  devtool: BUILDING ? 'cheap-module-source-map' : 'eval-source-map',
  resolve: {
    alias: {
      config$: root('src/config.js'),
      actions: root('src/actions'),
      components: root('src/components'),
      features: root('src/features')
    }
  },
  output: {
    path: root('dist'),
    filename: BUILDING ? 'js/[name].[hash].js' : 'js/[name].js',
    chunkFilename: BUILDING ? '[id].[hash].chunk.js' : '[id].chunk.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [TransformRuntimePlugin, ReactHotLoaderPlugin]
          }
        }
      },
      {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }, {
          loader: 'sass-loader'
        }]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        MOB_API_URL: JSON.stringify(process.env.MOB_API_URL),
      }
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      chunksSortMode: 'dependency'
    })
  ]
}

if (BUILDING) {
  config.plugins.push(
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new CopyWebpackPlugin([{
        from: root('public')
    }])
  )
}

function root (dir) {
  return path.resolve(__dirname, dir)
}

module.exports = config
