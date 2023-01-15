//네비
$(document).ready(function () {
    $('#header .nav_bar').hide();
    $('.nav_group li').click(function () {
        $('#header .nav_bar').toggle();
    });
})

$(document).ready(function () {
    $('#header .nav_bar').hide();
    $('.close button').click(function () {
        $('#header .nav_bar').hide();
    });
})






//메인이미지
$(document).ready(function () {
    var current = 0
    var setIntervalId;

    timer();
    function timer() {
        setIntervalId = setInterval(function () {
            var n = current + 1;
            if (n == 4) {
                n = 0;
            }
            move(n);
        }, 5000)
    }
    function move(n) {
        var currentEl = $('.main_img li').eq(current);
        var nextEl = $('.main_img li').eq(n);

        currentEl.css({ left: '0%' }).animate({ left: '-100%' });
        nextEl.css({ left: '100%' }).animate({ left: '0%' });

        current = n;
    }
});


// 지금 떠나기 좋은 여행
$(document).ready(function () {
    $('.btn1').click(function () {
        $('.travel_b ul li:first').insertAfter('.travel_b ul li:last');
    })
})
$(document).ready(function () {
    $('.btn2').click(function () {
        $('.travel_b ul li:last').insertBefore('.travel_b ul li:first');
    })
})