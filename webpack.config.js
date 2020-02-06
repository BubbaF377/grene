const path = require("path");

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: path.resolve(__dirname, 'src', 'app'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: '/',
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx',
      '.ts',
      '.tsx',
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: 'babel-loader',
      },
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
            {
                loader: "ts-loader",
            },
        ],
      },
      {
          enforce: "pre",
          test: /\.js$/,
          loader: "source-map-loader",
      },
    ],
  },
  externals: {
    "react": "React",
    "react-dom": "ReactDOM",
  },
};
