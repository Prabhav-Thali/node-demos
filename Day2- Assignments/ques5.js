var fs = require('fs');
var rs = fs.createReadStream('out.txt', { encoding: 'utf-8', highWaterMark: 100 });
var stream = fs.createWriteStream('out.txt', { flags: 'a+' });
// Event 'data' will be emitted when first chunk is read

rs.on('data', function (dataChunk) {
    console.log('New Chunk');
    console.log(dataChunk);
})

stream.write('hi writing started');
stream.write('writing......');
stream.write('writing ended');
stream.end();
stream.on('finish', function () {
    console.log("All writes complete");
})
