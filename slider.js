
var owl = $('.owl-carousel');
owl.owlCarousel({
    items:4,
    loop:true,
    margin:10,
    // nav:true,
    autoplay:true,
    autoplayTimeout:2000,
    responsive:{
        1336:{
            items:4,
        },
        1000:{
            items:3,
        },
        720:{
            items:2,
        },
        560:{
            items:1.5,
        },
        360:{
            items:1,
        }
    },
    autoplayHoverPause:true
});




var owl = $('.owl-carousel1');
owl.owlCarousel({
    items:2,
    loop:true,
    margin:10,
    // nav:true,
    autoplay:true,
    autoplayTimeout:2000,
    responsive:{
        1336:{
            items:2,
        },
        360:{
            items:1,
        },
     
    },
    autoplayHoverPause:true
});




var owl = $('.owl-carousel2');
owl.owlCarousel({
    items:6,
    loop:true,
    margin:10,
    // nav:true,
    autoplay:true,
    autoplayTimeout:2000,
    responsive:{
        1336:{
            items:6,
        },
        1000:{
            items:4,
        },
        720:{
            items:3,
        },
        560:{
            items:2,
        },
        360:{
            items:1,
        }
    },
    autoplayHoverPause:true
});



