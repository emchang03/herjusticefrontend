const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = {
  mode: 'development',
  // resolve : {
  //   fallback: {
  //         // Use can only include required modules. Also install the package.
  //         // for example: npm install --save-dev assert
  //         url: require.resolve('url'),
  //         fs: require.resolve('fs'),
  //         assert: require.resolve('assert'),
  //         crypto: require.resolve('crypto-browserify'),
  //         http: require.resolve('stream-http'),
  //         https: require.resolve('https-browserify'),
  //         os: require.resolve('os-browserify/browser'),
  //         buffer: require.resolve('buffer'),
  //         stream: require.resolve('stream-browserify'),
  //     }
  //   },
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'main.js',
    publicPath: '/',
    // historyApiFallback: true,
  },
  target: 'web',
  devServer: {
    port: '3000',
    static: [".//public"],
//     static: {
//       directory: path.join(__dirname, 'public')
// },
    open: true,
    hot: true,
    liveReload: true,
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, //kind of file extension this rule should look for and apply in test
        exclude: /node_modules/, //folder to be excluded
        use: {
            loader: "babel-loader", //loader which we are going to use
        },
    },
    {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
    },
    {
        test: /\.(pdf|png|jpg|gif|svg)$/,
        use: [
            {
                loader: "file-loader",
                options: {
                    name: "[name].[ext]",
                    outputPath: "assets/images/",
                },
            },
        ],
    },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    }),
    new NodePolyfillPlugin()

  //   new webpack.ProvidePlugin({
  //     process: 'process/browser',
  //     Buffer: ['buffer', 'Buffer'],
  // })
  ]
};