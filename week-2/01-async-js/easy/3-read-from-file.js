const fs = require('fs');

function readFileContents(filename) {
    
    fs.readFile(filename, 'utf8', (err, data) => {
        if (err) {
            console.log(err);
        }
        console.log('File contents:');
        console.log(data);

        // Simulating an expensive operation
        console.time('expensiveOperation');
        let result = 0;
        for (let i = 0; i < 1000000000; i++) {
            result += i;
        }
        console.timeEnd('expensiveOperation');
        console.log('Result:', result);
    });
}

readFileContents('aa.txt');