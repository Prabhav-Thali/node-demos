var fs = require('fs');
fs.readFile('UserData.txt', 'utf-8', function (err, filedata) {
    if (err)
        console.log('Error in file reading');
    else
        console.log(filedata);
})

fs.writeFile("UserData.txt", "Hi", function (err) {
    if (err)
        console.log('Error while wrting');
    else
        console.log('written successfully');
})

fs.appendFile("UserData.txt", ", Hello", function (err) {
    if (err)
        console.log('Error while wrting');
    else
        console.log('Appended successfully');
})