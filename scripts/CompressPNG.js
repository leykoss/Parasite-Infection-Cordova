var fs = require('fs');
const imagemin = require("imagemin");
const imageminPngquant = require("imagemin-pngquant");


//Not Working

module.exports = function(context) {
    var currentPath = process.cwd();
    console.log('Current path');
    console.log(currentPath);

    context.opts.platforms.forEach((p,ind) => {
        let route = context.opts.paths[ind].replace(`${context.opts.projectRoot}\\`,``);
        (async () => {
            console.log(`Compressing png`);
            const searchRegExp = /\\/gi;
            console.log(`${route}\\Images\\*.{png}`);
            const files = await imagemin([`C:\\Users\\Zoilo Reyes\\source\\repos\\Parasite\\www\Images\\Base2.png`],{
                destination: `C:\\Users\\Zoilo Reyes\\source\\repos\\Parasite\\Imagessss`,
                plugins: [
                    imageminPngquant({
                        quality: [0.6, 0.8]
                    })
                ]
            });
            console.log(`PNG Compressed`);
            console.log(files);
        })();
    })
    /*//original path
    */
}