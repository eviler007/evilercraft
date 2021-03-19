// const path = require('path');
// const PrerenderSPAPlugin = require('prerender-spa-plugin');
const WebpackBundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  publicPath: '',
  chainWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // 包模块分析工具
      config.plugin('bundle-analyzer')
        .use(WebpackBundleAnalyzer, []);
      // 预渲染
      // config.plugin('prerender-spa')
      //   .use(PrerenderSPAPlugin, [{
      //     staticDir: path.join(__dirname, './dist'),
      //     routes: [ '/', '/about' ]
      //   }]);
    }
  }
};