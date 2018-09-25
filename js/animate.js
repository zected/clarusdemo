var navButton = document.getElementById("btn-toggle");

function toggleNavDisplay(e){
    e.preventDefault(),
    document.getElementById("responNav").classList.toggle("showNav")}
    
    navButton.addEventListener("click",toggleNavDisplay);

window.sr = ScrollReveal({
    reset: false
});


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
    duration:1000,
    delay:1000,
    opacity: 0,
});

sr.reveal('#main-fitur, .whatwedo',{
    duration:1000,
    delay:1000,
    opacity: 0,
});

sr.reveal('#main-fitur .data',{
    origin: 'left',
    duration:400,
    delay:800,
    scale: 0.5,
});

sr.reveal('#main-fitur .app',{
    origin: 'right',
    duration:400,
    delay:1000,
    scale: 0.5,
});

sr.reveal('#main-fitur .ent',{
    origin: 'left',
    duration:400,
    delay:1200,
    scale: 0.5,
});

sr.reveal('#main-fitur .cloud',{
    origin: 'right',
    duration:400,
    delay:1400,
    scale: 0.5,
});

sr.reveal('#partner',{
    duration:400,
    delay:800,
});
sr.reveal('#partner img',{
    duration:600,
    origin:'buttom',
    delay:800,
    scale: 0.8,
});

