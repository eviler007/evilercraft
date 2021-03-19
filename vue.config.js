const WebpackBundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  publicPath: './',
  chainWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      config.plugin('bundle-analyzer')
        .use(WebpackBundleAnalyzer, []);
    }
  }
};