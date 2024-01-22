const fs = require('fs');
const path = require('path');


        fs.open(path.join(__dirname, 'project-dist','bundle.css'), 'w', (err) => {
            if(err) {throw err;
            fs.unlink(path.join(__dirname, 'project-dist','bundle.css'), 'w', (err) => {
                if(err) throw err;});}
                else{ console.log('Файл создан!')}
        });


fs.readdir(path.join(__dirname, 'styles'), (err, files) =>{
	if (err) {console.log(err);} else {
	files.forEach((file) => {
        if (path.extname(file) === '.css') {
        fs.readFile(path.join(__dirname, 'styles', file), "utf8", 
        function(error,data){
            if(error) throw error;
         
            fs.appendFile(path.join(__dirname, 'project-dist', "bundle.css"), data, function(error){
                if(error) throw error; 
               
            });
     
    });
}
   });
 }
 console.log("Запись в файл bundle.css завершена.");
});

