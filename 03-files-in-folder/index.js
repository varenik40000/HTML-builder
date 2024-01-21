const fs = require('fs');
const path = require('path');

fs.readdir(path.join(__dirname, 'secret-folder'), (err, files) =>{

	if (err) {console.log(err);} else {
	files.forEach((file) => {


fs.stat(path.join(__dirname, 'secret-folder', file), (err, stats) => {
				if (err) { console.log(err);
 					return
 				} else if(stats.isDirectory()){
                    console.log('-------------------------------');
                    console.log('Это не файл, это папка: '+ path.basename(file));
                    console.log('-------------------------------');
                 } else{	
                console.log('-------------------------------');
                console.log('Имя файла: '+ path.basename(file));
                console.log('Расширение: '+ path.extname(file));
                console.log('Размер:' +stats.size/1000 + 'kb');
                console.log('-------------------------------');
			}
		});
})	
}
});