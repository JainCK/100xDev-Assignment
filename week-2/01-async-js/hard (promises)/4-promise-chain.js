/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(t) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        },1000)
    })
}

function wait2(t) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        },2000)
    })
}

function wait3(t) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        },3000)
    })
}

function calculateTime(t1, t2, t3) {
    const startTIme = Date.now();
    wait1().then(() => {
        return wait2();
    }).then(() => {
        return wait3();
    }).then(() => {
        console.log(`It took ${Date.now() - startTIme} milliseconds for all promises to resolve`);
    })
}

module.exports = calculateTime;
