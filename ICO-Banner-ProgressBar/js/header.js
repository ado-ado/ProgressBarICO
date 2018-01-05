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
    particlesJS.load('particles-js', '../particles.json', function () {
        console.log('callback - particles.js config loaded');
    });
    $("#today").html(today.toDateString());
    updateTime();
    animatedProgress();
})

async function animatedProgress() {
    for (var i = 0; i < 40; i++) {
        $(".progress-bar").css("width", i + "%");
        await sleep(10);
    }
    $(".progress-bar").html("1200")
}

async function updateTime() {
    setInterval(() => {
        let time = new Date(dateEnd - new Date(Date.now()));
        $("#time").html(time.toLocaleTimeString());
    }, 1000)
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}