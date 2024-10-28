document.addEventListener("DOMContentLoaded", function () {
    const loadingOverlay = document.getElementById("loading-overlay")
    loadingOverlay.classList.add("loaded")
    // console.log("Page loaded.")
})

// apri e chiudi categorie
const hero_titoli = document.querySelectorAll(".hero-titolo")
hero_titoli.forEach(titolo => {
    titolo.addEventListener("click", () => {
        var categoria_contenuto = titolo.nextElementSibling
        // applica categoria-attiva a categoria-contenuto
        categoria_contenuto.classList.toggle("nascosta")
    })
})

// check if anchor tag has been scrolled over
document.addEventListener("scroll", () => {
    const rectAbout = document.getElementById("about").getBoundingClientRect()
    const rectEventDesign = document.getElementById("event-design").getBoundingClientRect()
    const rectGraficaSocial = document.getElementById("social-media").getBoundingClientRect()
    const rectStampe = document.getElementById("stampe").getBoundingClientRect()
    const rectLoghi = document.getElementById("branding").getBoundingClientRect()
    const rectContatta = document.getElementById("contatta").getBoundingClientRect()
    // const rectContatta = document.getElementById("contatta").getBoundingClientRect()
    let loadingBarFill = document.querySelector(".loadingbar-fill")


    if (window.matchMedia("(min-width: 1025px)").matches) {
        // desktop
        if (rectAbout.top < window.innerHeight) {
            loadingBarFill.style.width = "0%"
        } if (rectEventDesign.top < window.innerHeight) {
            loadingBarFill.style.width = "16.67%"
        } if (rectGraficaSocial.top < window.innerHeight) {
            loadingBarFill.style.width = "33.34%"
        } if (rectStampe.top < window.innerHeight) {
            loadingBarFill.style.width = "50%"
        } if (rectLoghi.top < window.innerHeight) {
            loadingBarFill.style.width = "66.7%"
        } if (rectContatta.top < window.innerHeight) {
            loadingBarFill.style.width = "83.3%"
        }
    } else {
        // mobile
        if (rectAbout.top < window.innerHeight) {
            loadingBarFill.style.width = "0%"
        } if (rectEventDesign.top < window.innerHeight) {
            loadingBarFill.style.width = "16.6%"
        } if (rectGraficaSocial.top < window.innerHeight) {
            loadingBarFill.style.width = "33.3%"
        } if (rectStampe.top < window.innerHeight) {
            loadingBarFill.style.width = "50%"
        } if (rectLoghi.top < window.innerHeight) {
            loadingBarFill.style.width = "66.7%"
        } if (rectContatta.top < window.innerHeight) {
            loadingBarFill.style.width = "83.3%"
        }
    }
})

// animate objects in when in the viewport
const options = {
    // root: document.querySelector('.wrap'),
    rootMargin: '0px',
    threshold: 0,
}
const observedElements = document.querySelectorAll('.hidden-on-load');
console.log(observedElements)
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('onviewport');
        }
    })
}, options)

observedElements.forEach(observedElement => {
    observer.observe(observedElement)
})