var navButton = document.getElementById("btn-toggle");

function toggleNavDisplay(e){
    e.preventDefault(),
    document.getElementById("responNav").classList.toggle("showNav")}
    
    navButton.addEventListener("click",toggleNavDisplay);


    // window.sr = ScrollReveal({ reset: false });
    

/// slider

$(".bg-slide").vegas({
    delay: 5000,
    transitionDuration: 1000,
    shuffle: true,
    slides: [
        { src: "asset/img/bg-slider1.jpg" },
        { src: "asset/img/bg-clarus1.jpg" },
        { src: "asset/img/bg-slider2.jpg" },
        { src: "asset/img/bg-slider3.jpg" },
        { src: "asset/img/bg-clarus2.jpg" },
        { src: "asset/img/bg-slider4.jpg" },
        { src: "asset/img/bg-slider5.jpg" },
        { src: "asset/img/bg-slider6.jpg" },
    ],
    transition: 'fade'
});

////

/// scroll
$('.go-scroll').on('click', function() {  
    $('html, body').animate({scrollTop: $(this.hash).offset().top - 0}, 1200);
    return false;
});

////

window.sr = ScrollReveal({ 
    reset: false
});


sr.reveal('.partner-card', { 
    interval: 80 
});

sr.reveal('#article',{
    duration:400,
    delay:400,
    opacity: 0,
});

sr.reveal('#about',{
    duration:500,
    delay:500,
    opacity: 0,
});


sr.reveal('.servis-article',{
    duration:500,
    delay:500,
    scale: 0.8,
});

sr.reveal('#main-servis-id',{
    duration:500,
    delay:500,
    scale: 0.8,
});

sr.reveal('#main-fitur, .whatwedo',{
    duration:500,
    delay:500,
    opacity: 0,
});

sr.reveal('.fitur-card',{
    duration: 500,
    delay: 500,
    interval: 300,
});

// sr.reveal('.data',{
//     origin: 'left',
//     duration:400,
//     delay:1000,
//     scale: 0.5,
// });

// sr.reveal('.app',{
//     origin: 'right',
//     duration:400,
//     delay:1000,
//     scale: 0.5,
// });

// sr.reveal('.ent',{
//     origin: 'left',
//     duration:400,
//     delay:1000,
//     scale: 0.5,
// });

// sr.reveal('.cloud',{
//     origin: 'right',
//     duration:400,
//     delay:1000,
//     scale: 0.5,
// });

sr.reveal('#partner',{
    duration:400,
    delay:400,
});

sr.reveal('#partner img',{
    duration:600,
    origin:'buttom',
    delay:400,
    scale: 0.8,
});


sr.reveal('.about-intro',{
    duration: 700,
    origin:'buttom',
    delay:400,
});

sr.reveal('#vision',{
    duration: 900,
    delay:400,
});

sr.reveal('#mision',{
    duration: 1100,
    origin:'left',
    delay:400,
    
});

sr.reveal('#our-value',{
    duration: 1300,
    origin:'bottom',
    delay:400,
    
});

sr.reveal('.contact-intro',{
    duration: 700,
    origin: 'left',
    delay:400,
});

sr.reveal('#contact-detail',{
    duration: 700,
    delay:400,
});



