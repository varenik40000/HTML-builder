const readline = require('readline');
const fs = require('fs');
const path = require('path');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });

// rl.question('Hey, dude! Bro/sis write smthg plz: ', (answer) => {
output.write(`Hey, dude! Bro/sis write smthg plz:\n`);
rl.on('line', (data) => { 
    if (data === 'exit') { rl.close();}
    else {
        fs.appendFile(path.join(__dirname, '', 'text.txt'), data, function(error){
        if(error) throw error;
        output.write(`Add data!!!\n`);
       
    });
}
  }); 
rl.on('close', () =>{
     output.write('ByeBye!!!');
    });
