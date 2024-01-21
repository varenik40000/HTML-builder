const fs = require('fs');
const path = require('path');


// function copyDir()  {
    const dirName = "files-copy";

    
fs.access(path.join(__dirname, 'files-copy'), function(error){
    if (error) {
        fs.mkdir(path.join(__dirname, '/', dirName), (err)=>{
                if (err) {console.log(err);} 
                else {
                    // console.log(`${dirName} created!`); 
                }
        })
         }     else {
       
            fs.readdir(path.join(__dirname, 'files-copy'), (err, files) =>{
            if (err) {console.log(err);} else {
                files.forEach((file) => {
                    // console.log(file);
                    fs.unlink(path.join(__dirname, 'files-copy', file), function() {
                        // fs.rmdir(path.join(__dirname, dirName));
                    });
                    
                    // fs.rmdir(path.join(__dirname, dirName), err=> {
                    //     if (err) {console.log(err);
                    //     console.log('DELETE!');}
                    // });
                    
    });     
}
                });
}            

fs.readdir(path.join(__dirname, 'files'), (err, files) =>{
    if (err) {console.log(err);} else {
    files.forEach((file) => {
        // console.log(file);
                fs.copyFile((path.join(__dirname, 'files', file)), (path.join(__dirname, 'files-copy', file)), err => {
                        if (err) {console.log(err);} else {}
                    });
                })
                console.log('Файлы успешно скопированы');
            }
        });            
});





