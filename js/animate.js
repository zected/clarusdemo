var navButton = document.getElementById("btn-toggle");

function toggleNavDisplay(e){
    e.preventDefault(),
    document.getElementById("responNav").classList.toggle("showNav")}
    
    navButton.addEventListener("click",toggleNavDisplay);

window.sr = ScrollReveal({
    reset: false
});

/// slider

$(".bg-slide").vegas({
    delay: 8000,
    transitionDuration: 1000,
    shuffle: true,
    slides: [
        { src: "/asset/img/bg-slider1.jpg" },
        { src: "/asset/img/bg-slider2.jpg" },
        { src: "/asset/img/bg-slider3.jpg" },
        { src: "/asset/img/bg-slider4.jpg" },
        { src: "/asset/img/bg-slider5.jpg" },
        { src: "/asset/img/bg-slider6.jpg" },
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

sr.reveal('#article',{
    duration:400,
    delay:400,
    opacity: 0,
});

sr.reveal('#about',{
    duration:500,
    delay:1000,
    opacity: 0,
});


sr.reveal('.servis-article',{
    duration:500,
    delay:800,
    scale: 0.8,
});

sr.reveal('#main-servis-id',{
    duration:500,
    delay:1000,
    scale: 0.8,
});

sr.reveal('#main-fitur, .whatwedo',{
    duration:500,
    delay:1000,
    opacity: 0,
});

sr.reveal('.data',{
    origin: 'left',
    duration:400,
    delay:800,
    scale: 0.5,
});

sr.reveal('.app',{
    origin: 'right',
    duration:400,
    delay:900,
    scale: 0.5,
});

sr.reveal('.ent',{
    origin: 'left',
    duration:400,
    delay:1000,
    scale: 0.5,
});

sr.reveal('.cloud',{
    origin: 'right',
    duration:400,
    delay:1100,
    scale: 0.5,
});

sr.reveal('#partner',{
    duration:400,
    delay:600,
});

sr.reveal('#partner img',{
    duration:600,
    origin:'buttom',
    delay:600,
    scale: 0.8,
});


