// toffle menu icon

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// Scroll section

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if (top > offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    });
    //  sticky Nav bar
    
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.screenY > 100);

    //    remove menu icon and navbar when navbar link clicked or scrolled
    
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}

// scroll reveal

ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading,', { origin: 'top' });
ScrollReveal().reveal('.home-img , .service-container , .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, ', { origin: 'right' });

//  typed js

var typed = new Typed('.multiple', {
    strings: ['Frontend Developer', ' Student ', 'Trustable Friend'],
    typeSpeed: 100,
    backSpeed: 100,
    typeDelay: 1000,
    loop: true
});

var typed = new Typed('.port', {
    strings: ['Projects', 'Certificats'],
    typeSpeed: 100,
    backSpeed: 100,
    typeDelay: 1200,
    loop: true
});

function readme(x) {
    let box = document.querySelector(x)
    box.classList.toggle('show');
}

let themebtn = document.querySelector('#theme')
var check = 1;

themebtn.onclick = () => {
    themebtn.classList.toggle("bxs-sun")
    if (check === 0) {
        document.documentElement.style.setProperty('--bg-color', ' #1f242d')
        document.documentElement.style.setProperty('--second-bg-color', ' #323946')
        document.documentElement.style.setProperty('--text-color', ' #fff')
        document.documentElement.style.setProperty('--main-color', ' #0ef')
        themebtn.innerHTML = "light"
        check = 1
    }
    else {
        document.documentElement.style.setProperty('--bg-color', ' #f9f9f9')
        document.documentElement.style.setProperty('--second-bg-color', ' #eaeaea')
        document.documentElement.style.setProperty('--text-color', ' #333333')
        document.documentElement.style.setProperty('--main-color', ' #64ef16')
        themebtn.innerHTML = "Dark"
        check = 0
    }
}


let sharebtn = document.querySelector('#sharebtn');
let closebtn = document.querySelector('.close');
let sharemenu = document.querySelector('.share');

sharebtn.onclick = () =>{
    sharemenu.classList.toggle('open');
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
closebtn.onclick = () =>{
    sharemenu.classList.toggle('open');
}

document.getElementById('whatshare').addEventListener('click', function(){
    var wtext = encodeURIComponent("Hey Everyone 🌟 Take a peak at my portfolio website--it's a showcase of my projects and passion for Coding.🚀 Let's connect and explore the possibilities together. check it out here: https://deepanshuweb.netlify.app 💻✨ #webDev #Portfolio")
    var wshare = ' https://api.whatsapp.com/send?text=' + wtext;
    window.open(wshare, '_blank');
})

document.getElementById('twishare').addEventListener('click', function(){
    var ttext = encodeURIComponent("Hey Everyone 🌟 Take a peak at my portfolio website--it's a showcase of my projects and passion for Coding.🚀 Let's connect and explore the possibilities together. check it out here: https://deepanshuweb.netlify.app 💻✨ #webDev #Portfolio")
    var tshare = ' https://twitter.com/intent/tweet?text=' + ttext;
    window.open(tshare, '_blank');
})


document.getElementById('linshare').addEventListener('click', function(){
    var tetext = encodeURIComponent("Hey Everyone 🌟 Take a peak at my portfolio website--it's a showcase of my projects and passion for Coding.🚀 Let's connect and explore the possibilities together. check it out here: https://deepanshuweb.netlify.app 💻✨ #webDev #Portfolio")
    var teshare = 'https://www.linkedin.com/sharing/share-offsite/?url=' + tetext;
    window.open(teshare, '_blank');
})

document.getElementById('cop').addEventListener('click', function(){
    var copytext = "Hey Everyone 🌟 Take a peak at my portfolio website--it's a showcase of my projects and passion for Coding.🚀 Let's connect and explore the possibilities together. check it out here: https://deepanshuweb.netlify.app 💻✨ #webDev #Portfolio"
  
    navigator.clipboard.writeText(copytext).then(function(){
        alert("Text copy to the clipbord")
    })
})

document.getElementById('facshare').addEventListener('click', function(){
    var ftext = encodeURIComponent("https://deepanshuweb.netlify.app")
    var fshare = ' https://www.facebook.com/sharer/sharer.php?u=' + ftext;
    window.open(fshare, '_blank');
})
