var fs = require('fs');
var path = require('path');
var minify = require('html-minifier').minify;

module.exports = function(context) {
    return new Promise(resolve => {
        context.opts.paths.forEach((p,ind) => {
            //original path
            const baseDir = p;
            const initPoint = `${baseDir}\\index.html`;
    
            if (fs.existsSync(initPoint)) {
                console.log(`Reading original html file on ${context.opts.platforms[ind]}`);
                var content = fs.readFileSync(initPoint,`utf8`);
                console.log(`Minifying html file on ${context.opts.platforms[ind]}.`)
                var result = minify(content, {
                    removeAttributeQuotes: true,
                    collapseWhitespace: true,
                    removeComments: true,
                    removeOptionalTags: true,
                    removeRedundantAttributes: true,
                    removeTagWhitespace: true,
                    useShortDoctype: true,
                    minifyCSS: true,
                    minifyJS: true,
                    removeComments: true,
                    removeEmptyAttributes: true,
                    removeEmptyElements: true,
                });
                fs.writeFileSync(initPoint,result,'utf8');
                console.log(`html file minified on ${context.opts.platforms[ind]}`);
            }
        });
        resolve();
    })
}