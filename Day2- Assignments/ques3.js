var fs = require('fs');

fs.readdir('.', function (err, files) {
    if (err)
        console.log('Error while reading');
    else {
        for (var i = 0; i < files.length; i++) {
            console.log('File Name: ' + files[i]);
            fs.stat(files[i], function (err, statsObj) {
                console.log('size in bytes: ' + statsObj.size);
                console.log('Created at: ' + statsObj.ctime);
            })
        }
        console.log(files.length);
    }
})
