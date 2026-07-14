$(function () {

    $(".section1 .ball-hitbox").hide();
    $(".section2 .ball-hitbox").hide();

    $(".section1 .handle").click(function () {

        let handle = $(this);

        handle.addClass("rotate");
        $(".section1 .gacha-wrap").addClass("shake");

        setTimeout(function () {
            handle.removeClass("rotate");
            $(".section1 .gacha-wrap").removeClass("shake");
        }, 500);

        $(".section1 .ball-hitbox")
            .stop(true, true)
            .show()
            .css({
                top: "330px"
            })
            .animate({
                top: "500px"
            }, 500);

        $(".section1 .gacha-shadow")
            .stop(true, true)
            .show()
            .css({
                width: "60px",
                height: "14px",
                opacity: 0.05
            })
            .animate({
                width: "90px",
                height: "28px",
                opacity: 1
            }, 500);
    });

    $(".section1 .ball-hitbox").click(function () {
        $(".popup1").fadeIn();
    });


    $(".section2 .handle").click(function () {

        let handle = $(this);

        handle.addClass("rotate");
        $(".section2 .gacha-wrap").addClass("shake");

        setTimeout(function () {
            handle.removeClass("rotate");
            $(".section2 .gacha-wrap").removeClass("shake");
        }, 500);

        $(".section2 .ball-hitbox")
            .stop(true, true)
            .show()
            .css({
                top: "330px"
            })
            .animate({
                top: "500px"
            }, 500);

        $(".section2 .gacha-shadow")
            .stop(true, true)
            .show()
            .css({
                width: "60px",
                height: "14px",
                opacity: 0.05
            })
            .animate({
                width: "90px",
                height: "28px",
                opacity: 1
            }, 500);
    });

    $(".section1 .ball-hitbox").click(function () {
        $(".popup1").fadeIn();
    });

    $(".section2 .ball-hitbox").click(function () {
        $(".popup-wrap").fadeIn();
    });


    // popup1 닫기
$(".popup1").click(function () {
    $(this).fadeOut();
});

// popup2 닫기
$(".popup-wrap").click(function () {
    $(this).fadeOut();
});
});
// 유튜브, 노션 링크 클릭 시 부모 클릭 막기
$(".yt, .no").click(function(e){
    e.stopPropagation();
});

var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    mousewheel: {
        releaseOnEdges: true
    }
});


function changeBulletColor() {

    $(".swiper-pagination-bullet").css(
        "background-image",
        'url("images/white.png")'
    );

    const colors = [
        "green.png",
        "blue.png",
        "red.png",
        "purple.png",
        "gray.png"
    ];

    $(".swiper-pagination-bullet")
        .eq(swiper.activeIndex)
        .css(
            "background-image",
            'url("images/' + colors[swiper.activeIndex] + '")'
        );
}

changeBulletColor();

swiper.on("slideChange", function () {
    changeBulletColor();
});


$(".nav-card").click(function (e) {
    e.preventDefault();

    let slideIndex = $(this).data("slide");
    swiper.slideTo(slideIndex);


    $("html, body").animate({
        scrollTop: $(".slide-section").offset().top
    }, 600);
});

$(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
        $('.gotop').fadeIn()
    } else {
        $('.gotop').fadeOut()
    }
})

$('.gotop').click(function (e) {
    e.preventDefault()
    $('html,body').animate({
        scrollTop: 0
    }, 1000)
})