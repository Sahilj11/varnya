gsap.registerPlugin(ScrollTrigger);
const currentYear = new Date().getFullYear();
document.getElementById("current-year").textContent = currentYear;
const tl1 = gsap.timeline({
    scrollTrigger: {
        trigger: ".hero-content",
        start: "top 60%", 
        end: "50% 50%", 
        scrub: true, 
    },
});

// Animate the image (translate from left to right)
tl1.from(".animate-meimg1", { x: -200, opacity: 0, duration: 1 });

// Animate the paragraph (translate from right to left)
tl1.from(".animate-mep1", { x: 200, opacity: 0, duration: 1 }, "-=0.5"); // Offset animation slightlyj

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#first-team",
        start: "bottom 60%", 
        end: "120% 50%", 
        scrub: true, 
    },
});

// Animate the image (translate from left to right)
tl.from(".animate-meimg", { x: -200, opacity: 0, duration: 1 });

// Animate the paragraph (translate from right to left)
tl.from(".animate-mep", { x: 200, opacity: 0, duration: 1 }, "-=0.5"); // Offset animation slightlyj

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 2000,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

setTimeout(function() {
    document.getElementById("sticky-banner").classList.remove("hidden");
    document.getElementById("sticky-banner").classList.add("flex");
}, 5000);

document
    .querySelector('[data-dismiss-target="#sticky-banner"]')
    .addEventListener("click", function() {
        document.getElementById("sticky-banner").classList.add("hidden");
        document.getElementById("sticky-banner").classList.remove("flex");
    });
let menuOpened = false;
const mobilemenu = document.getElementById("navbar-hamburger");
const mobileMenuButton = document.getElementById("mobile-menu");
mobileMenuButton.addEventListener("click",()=>{
    if (menuOpened) {
        mobilemenu.classList.add("hidden")
        menuOpened = false;
    }else{
        mobilemenu.classList.remove("hidden")
        menuOpened = true;
    }
})
document.addEventListener("click", (event) => {
    // Check if the click was outside the menu and the hamburger button
    if (menuOpened && !mobilemenu.contains(event.target) && !mobileMenuButton.contains(event.target)) {
        mobilemenu.classList.add("hidden");
        menuOpened = false;
    }
});
