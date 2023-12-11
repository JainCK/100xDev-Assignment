const fs = require('fs')

function writeToFIle(filename,content) {
    fs.writeFile(filename, content, (err) => {
        if (err) {
            throw err;
        }
        console.log('The file has been saved!');
    })
}

writeToFIle('aa.txt', 'im writing to this fileeeeeeeeee');