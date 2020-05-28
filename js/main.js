
			
function fadeOutElem(elem) {
    elem.style.opacity = '0';
    setTimeout(function () {
        elem.style.display = 'none';
    }, 1000)
}

function fadeInElem(elem) {
    elem.style.display = 'block';
    setTimeout(function () {
        elem.style.opacity = '1';
    }, 15)
}
let resultWrapper = document.querySelector('.spin-result-wrapper');
let wheel = document.querySelector('.wheel-img');

function spin() {
    if (wheel.classList.contains('rotated')) {
        resultWrapper.style.display = "block";
    } else {
        wheel.classList.add('super-rotation');

        setTimeout(function () {
            resultWrapper.style.display = "block";
        }, 8000);
        setTimeout(function () {
            let duration = 1000;
            document.querySelectorAll('.spin-wrapper').forEach(function (elem) {
                elem.style.transition = 'all ' + duration + 'ms ease-in-out';
                elem.style.overflow = 'hidden';
                elem.style.maxHeight = elem.offsetHeight + 'px';
                setTimeout(function () {
                    elem.style.maxHeight = 0;
                    elem.style.padding = 0;
                    setTimeout(function () {
                        elem.style.display = 'none';
                    }, duration)
                }, 5)
            });
            document.querySelectorAll('.order_block').forEach(function (elem) {
                elem.style.display = 'block';
                let finalHeight = elem.offsetHeight + 30 + 'px';
                elem.style.transition = 'all ' + duration + 'ms ease-in-out';
                elem.style.overflow = 'hidden';
                elem.style.maxHeight = 0;
                setTimeout(function () {
                    elem.style.maxHeight = finalHeight;
                }, 5)
            });
        }, 10000);
        wheel.classList.add('rotated');
        localStorage[spinned] = true;
    }
}
document.querySelector('.cursor-text').addEventListener('click', spin);
var closePopup = document.querySelector('.close-popup');
document.querySelectorAll('.close-popup, .pop-up-button').forEach(function (elem) {
    elem.addEventListener('click', function (event) {
        event.preventDefault();
        fadeOutElem(document.querySelector('.spin-result-wrapper'));
        smoothScroll.scrollTo('#toForm', 1000, header.offsetHeight);
    })
});

let spinned = window.location.pathname + "spinned";
if (localStorage[spinned] == "true") {
    console.log('Done')
    $('.order_block').css("display", "block");
    $('.spin-wrapper').css("display", "none");
}

var time;
var intr;

if (localStorage.Gluconormix73842) {
    if (localStorage.Gluconormix73842 == 0 || localStorage.Gluconormix73842 < 0) {
        localStorage.Gluconormix73842 = 5;
        time = localStorage.Gluconormix73842;
        start_timer();

    } else {
        time = localStorage.Gluconormix73842;
        start_timer();
    }
} else {
    time = 900;
    start_timer();
}

function start_timer() {
    intr = setInterval(tick, 1000);
}

function tick() {
    if (localStorage.Gluconormix73842) {
        time = localStorage.Gluconormix73842 - 1;
    } else {
        time = time - 1;
    }
    var mins = Math.floor(time / 60);
    var secs = time - mins * 60;
    if (mins == 0 && secs == 0) {
        clearInterval(intr);
        time = 0;
        $(".min").html('00');
        $(".sec").html('00');
    }
    secs = secs >= 10 ? secs : "0" + secs;
    mins = mins >= 10 ? mins : "0" + mins;
    $(".min").html(mins);
    $(".sec").html(secs);
    localStorage.Gluconormix73842 = time;
}

(function () {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://ipapi.co/json/', !0);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                var response = JSON.parse(xhr.responseText);
                document.querySelectorAll('.cityname').forEach(function (elem) {
                    elem.innerHTML = response.city
                })
            }
        }
    };
    xhr.send();
})();