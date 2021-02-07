function realtimeClock(){
    let rtClock = new Date();

    let h = rtClock.getHours();
    let m = rtClock.getMinutes();
    let s = rtClock.getSeconds();

    // Add Am and pm system 
    let amPm = (h<12) ? "AM" : "PM";

    // convrt the hours component into 12-hour formate 
    h = (h>12) ? h-12 : h;

    // Pad the hours, minutes and seconds with leading zeros 
    h = ("0" + h).slice(-2);
    m = ("0" + m).slice(-2);
    s = ("0" + s).slice(-2);

    // Display the clock 
    document.getElementById('clock').innerHTML = 
        h + " : " + m + " : " + s + " " + amPm;
}
rest = setInterval(realtimeClock, 1000);

