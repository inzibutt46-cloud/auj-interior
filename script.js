// ================================
// Reveal Animation
// ================================

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", revealSections);

function revealSections() {

    reveals.forEach((reveal) => {

        const windowHeight = window.innerHeight;
        const revealTop = reveal.getBoundingClientRect().top;
        const revealPoint = 120;

        if (revealTop < windowHeight - revealPoint) {

            reveal.classList.add("active");

        }

    });

}

// Run once when page loads
revealSections();


// ================================
// Back To Top Button
// ================================

const topBtn = document.getElementById("topBtn");

if (topBtn) {

    window.addEventListener("scroll", function () {

        if (window.scrollY > 300) {

            topBtn.style.display = "block";

        } else {

            topBtn.style.display = "none";

        }

    });

    topBtn.addEventListener("click", function () {

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });

    });

}

// Mobile Menu

const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

if(menuToggle && navbar){

menuToggle.addEventListener("click",()=>{

menuToggle.classList.toggle("active");

navbar.classList.toggle("active");

});

document.querySelectorAll("#navbar a").forEach(link=>{

link.addEventListener("click",()=>{

menuToggle.classList.remove("active");

navbar.classList.remove("active");

});

});

}

/* ===============================
   STICKY HEADER
=============================== */

const header = document.querySelector("header");

if (header) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    });

}

/* ===============================
   PRELOADER
=============================== */

window.addEventListener("load", function(){

const preloader = document.getElementById("preloader");

if(preloader){

preloader.style.opacity = "0";

setTimeout(function(){

preloader.style.display = "none";

},500);

}

});

/* ===============================
   LIGHTBOX
=============================== */

const galleryImages = document.querySelectorAll(".gallery img, .project-card img");

const lightbox = document.getElementById("lightbox");

const lightboxImg = document.getElementById("lightbox-img");

const closeLightbox = document.getElementById("close-lightbox");

if(lightbox && lightboxImg){

galleryImages.forEach(image=>{

image.addEventListener("click",()=>{

lightbox.style.display="flex";

lightboxImg.src=image.src;

});

});

}

if(closeLightbox){

closeLightbox.onclick=()=>{

lightbox.style.display="none";

};

}

if(lightbox){

lightbox.onclick=function(e){

if(e.target===lightbox){

lightbox.style.display="none";

}

};

}
/* ===============================
   COUNTER ANIMATION
=============================== */

const counters = document.querySelectorAll(".counter");

if (counters.length > 0) {

    const counterObserver = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                const counter = entry.target;

                const target = Number(counter.dataset.target);

                let count = 0;

                const speed = target / 80;

                function update() {

                    count += speed;

                    if (count < target) {

                        counter.textContent = Math.floor(count);

                        requestAnimationFrame(update);

                    } else {

                        counter.textContent = target + "+";

                    }

                }

                update();

                counterObserver.unobserve(counter);

            }

        });

    });

    counters.forEach(counter => counterObserver.observe(counter));

}

/* ===============================
   SCROLL PROGRESS BAR
=============================== */

const progressBar = document.getElementById("progress-bar");

if (progressBar) {

    window.addEventListener("scroll", () => {

        const scrollTop = document.documentElement.scrollTop;

        const scrollHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        const progress = (scrollTop / scrollHeight) * 100;

        progressBar.style.width = progress + "%";

    });

}