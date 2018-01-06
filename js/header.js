"use strict";

let today = new Date(Date.now());
let dateEnd = new Date("2018, 01, 12");

$(document).ready(() => {
    /*Particles.init({
        selector: '.background',
        maxParticles: 300,
        color: '#24e548',
        minDistance: 60,
        connectParticles: true
    });*/
    particlesJS.load('particles-js', '../particles.json');
    $("#today").html(today.toDateString());
    updateTime();
    animatedProgress();
})

function animatedProgress() {
    let i = 0;
    let progressAnimation = setInterval(() => {
        $(".progress-bar").css("width", i++ + "%");
        if (i === 40) {
            $(".progress-bar").html("1200")
            clearInterval(progressAnimation);
        }
    }, 10);
}

function updateTime() {
    setInterval(() => {
        let time = new Date(dateEnd - new Date(Date.now()));
        $("#time").html(time.getDay() + " Days & " + time.toLocaleTimeString());
    }, 1000)
}