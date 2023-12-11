const fs = require('fs');

function readFilefromTXT(filename,callbackCLeanfile,callbackWritefile) {
    fs.readFile(filename, 'utf8', (err, data) => { 
        if (err) {
            throw err;
        }  
        callbackWritefile(filename,callbackCLeanfile(data));
        
    })
}

function cleanFIle(content) {
    return content.replace(/\s+/g, ' ').trim();
}

function writeToFIle(filename,content) {
    fs.writeFile(filename, content, (err) => {
        if (err) {
            throw err;
        }
        console.log('The file has been saved!');
    })
}

readFilefromTXT('sample.txt', cleanFIle, writeToFIle);