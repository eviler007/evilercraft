const path = require('path');
const PrerenderSPAPlugin = require('prerender-spa-plugin');
const WebpackBundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const FontminPlugin = require('fontmin-webpack');
const prerenderRoutes = require('./prerenderRoutes.js');
const IS_PROD_ENV = process.env.NODE_ENV === 'production';

module.exports = {
  publicPath: '/',
  productionSourceMap: false,
  chainWebpack: config => {
    // 字体处理
    config.plugin('fontmin')
      .use(FontminPlugin, [{
        autodetect: true,
        glyphs: ['寒江孤影，江湖故人，相逢何必曾相識'].reduce((res, item) => {
          res.push(...Array.from(item));
          return res;
        }, [])
      }]);
    if (IS_PROD_ENV) {
      // 包模块分析工具
      config.plugin('bundle-analyzer')
        .use(WebpackBundleAnalyzer, []);
      // 预渲染
      config.plugin('prerender-spa')
        .use(PrerenderSPAPlugin, [{
          staticDir: path.join(__dirname, 'dist'),
          routes: prerenderRoutes,
          postProcess (renderedRoute) {
            // Ignore any redirects.
            renderedRoute.route = renderedRoute.originalRoute;
            // Basic whitespace removal. (Don't use this in production.)
            renderedRoute.html = renderedRoute.html.split(/>[\s]+</gmi).join('><');
            // Remove /index.html from the output path if the dir name ends with a .html file extension.
            // For example: /dist/dir/special.html/index.html -> /dist/dir/special.html
            if (renderedRoute.route.endsWith('.html')) {
              renderedRoute.outputPath = path.join(__dirname, 'dist', renderedRoute.route);
            }
    
            return renderedRoute;
          },
        }]);
    }
  }
};