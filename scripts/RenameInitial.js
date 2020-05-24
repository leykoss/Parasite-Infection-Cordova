var fs = require('fs');

module.exports = function(context) {
    context.opts.paths.forEach((p,ind) => {
        //original path
        const baseDir = p;
        const initPoint = `${baseDir}\\Parasite_Infection.html`;

        console.log(`Renaming ${context.opts.platforms[ind]} appInit`);
        if (fs.existsSync(initPoint)) {
            
            fs.rename(initPoint, `${baseDir}\\index.html`, (err) => {
                if(err) {
                    console.log('Error renaming index');
                }
                console.log(`Renamed ${context.opts.platforms[ind]} appInit to index.html`);
            });
        } else {
            console.log("Doesn't exists");
        }
    });
}