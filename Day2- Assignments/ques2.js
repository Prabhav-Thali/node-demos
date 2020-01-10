var fs= require('fs');
fs.stat('UserData.txt', function(err, statsObj){
    console.log('Created at: '+statsObj.birthtime);
    console.log('modified last at: '+statsObj.mtime);
    console.log('File Size: '+statsObj.size);
    console.log('Is File? '+statsObj.isFile());
})