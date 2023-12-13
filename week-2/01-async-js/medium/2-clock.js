function clock() {
    const currentDate = new Date(); 
    console.log(currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds());
}

setInterval(clock, 1000);

function clockinAMPM() {
    const currentDate = new Date(); 
    let hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();
    
    const amPM = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; 
    
    console.log(hours + ":" + (minutes < 10 ? '0' : '') + minutes + ":" + (seconds < 10 ? '0' : '') + seconds + " " + amPM);
}

setInterval(clockinAMPM, 1000);