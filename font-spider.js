var fontSpider = require('font-spider');

fontSpider.spider([__dirname + '/dist/index.html'], {
    silent: false,
    loadCssFile: false,
    debug: true,
    resourceBeforeLoad: function(file) {
      console.log('file', file);
      return {};
    }
}).then(function(webFonts) {
    return fontSpider.compressor(webFonts, {backup: true});
}).then(function(webFonts) {
    console.log(webFonts);
}).catch(function(errors) {
    console.error(errors);
});