var fs= require('fs');
var data ='This is my app';

var writeStream = fs.createWriteStream('D://write.txt');

writeStream.write(data,'UTF-8');
writeStream.end();

writeStream.on('finish',function (){
	console.log('Write completed');
});
writeStream.once('error', function (err	) {
	console.log(err.stack);
});
console.log ('program ended');

