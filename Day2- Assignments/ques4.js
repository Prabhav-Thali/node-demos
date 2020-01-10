var fs = require('fs');
fs.mkdir('Emp', function (err) {
    //Error Checking
    if (err)
        console.log('Error while Creating');
    else
        console.log('Dir created');
})

fs.rmdir('Emp', function (err) {
    //Error Checking
    if (err)
        console.log('Error while deleting');
    else
        console.log('Dir Deleted');
})