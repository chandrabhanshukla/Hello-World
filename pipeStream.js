var fs = require('fs');
var readStream = fs.createReadStream('D://write.txt');
var writeStream = fs.createWriteStream('D://input.txt');

readStream.pipe(writeStream);
console.log('Program ended');