// -----------------------------CountDown-------------------------------------------
// Set the date we're counting down to
var countDownDate = new Date("Jan 10, 2018 13:08:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("demo").innerHTML = "<span>" + days + "d</span>" + "<span>" + hours + "h</span>" + "<span>"
        + minutes + "m</span>" + "<span>" + seconds + "s</span>";

    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "<div id=" + "expired" + ">EXPIRED</div>";
    }
}, 1000);

// -----------------------------Progress Bar-------------------------------------------
var delay = 500;
$(".progress-bar").each(function (i) {
    $(this).delay(delay * i).animate({ width: $(this).attr('aria-valuenow') + '%' }, delay);

    $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
    }, {
            duration: delay,
            easing: 'swing',
            step: function (now) {
                $(this).html("<p>" + Math.ceil(now) + " coins</p>");
            }
        });
});
// -----------------------------Date-------------------------------------------
var date = new Date(),
    year = date.getFullYear(),
    month = date.getMonth(),
    day = date.getUTCDate(),
    months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

document.getElementById('daymonth').innerHTML = months[month] + " " + day + " " + year;
