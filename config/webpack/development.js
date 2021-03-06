import puiAliases from '../../helpers/pui-aliases';

module.exports = {
  devtool: 'inline-source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /bootstrap/,
        loader: 'imports?jQuery=jquery'
      },
      {
        test: /\.(eot|ttf|woff)$/,
        loader: 'url-loader',
      },
      {
        test: /\.s?css$/,
        loader: 'css-loader!sass-loader',
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'file-loader!image-webpack-loader'
      }
    ]
  },
  resolve: {
    alias: {
      bootstrap: `${__dirname}/../../node_modules/bootstrap-sass/assets/javascripts/bootstrap.js`,
      ...puiAliases
    }
  }
};
