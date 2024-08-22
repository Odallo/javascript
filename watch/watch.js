function updateClock() {
    const d = new Date();
    const seconds = d.getSeconds();
    const minutes = d.getMinutes();
    const hours = d.getHours();

    const secondDegree = (seconds / 60) * 360;
    const minuteDegree = (minutes / 60) * 360 + (seconds / 60) * 6;
    const hourDegree = (hours / 12) * 360 + (minutes / 60) * 30;

    document.getElementById("seconds-hand").style.transform = "rotate(" + secondDegree + "deg)";
    document.getElementById("minute-hand").style.transform = "rotate(" + minuteDegree + "deg)";
    document.getElementById("hour-hand").style.transform = "rotate(" + hourDegree + "deg)";
}

// Update the clock every second
setInterval(updateClock, 1000);
updateClock(); // Initial call to set the clock when the page loads
