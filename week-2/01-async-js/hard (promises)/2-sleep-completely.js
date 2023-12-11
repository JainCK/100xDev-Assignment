/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
    const startTime = Date.now();
    while (Date.now() - startTime < milliseconds) {
        // Busy wait
    }
}


console.log('Start');
sleep(3000); // Sleep for 3 seconds
console.log('End');

module.exports = sleep;
