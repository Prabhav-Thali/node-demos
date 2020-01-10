var emitter = require('events').EventEmitter;
var myemitter = new emitter();
myemitter.on('open', function () {
    console.log('start printing');
})

myemitter.on('printing', function (data) {
    console.log('printing ahead...' + data);
})

myemitter.on('end', function () {
    console.log('printing ends');
})
//condition to trigger an event
setInterval(function () {
    myemitter.emit('open');
    myemitter.emit('printing', "Tina");
    myemitter.emit('end');
}, 2000)