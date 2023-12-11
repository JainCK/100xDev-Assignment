function counter2(n) {
    let i = 1;
    const printinterval = () => {
        console.log(i);
        i++;

        if (i <= n) {
            setTimeout(printinterval, 1000);
        }
    }
    setTimeout(printinterval, 1000);
}

counter2(5);