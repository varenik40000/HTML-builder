const fs = require('fs')
const path = require('path')

const stream = fs.ReadStream(path.join(__dirname, '', 'text.txt'),{encoding: 'utf-8'});
stream.on('readable', function(){
    var data = stream.read();
    if (data !== null) {
    console.log(data);}
}); 
stream.on('end', function(){
    console.log("Файл прочитан!");
});