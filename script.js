// sidenav logic OLD REMOVE
const sidenav = document.querySelector(".sidenav")
const closebtn = document.querySelector(".closebtn")
function openNav() {
    sidenav.classList.add("nav-open")
    closebtn.classList.add("nav-open")
    setTimeout(function () {
    }, 300);
}
function closeNav() {
    sidenav.classList.remove("nav-open")
    closebtn.classList.remove("nav-open")
}

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
    const rectGraficaSocial = document.getElementById("grafica-social").getBoundingClientRect()
    const rectImpaginazione = document.getElementById("impaginazione").getBoundingClientRect()
    const rectLoghi = document.getElementById("loghi").getBoundingClientRect()
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
        } if (rectImpaginazione.top < window.innerHeight) {
            loadingBarFill.style.width = "50%"
        } if (rectLoghi.top < window.innerHeight) {
            loadingBarFill.style.width = "68%"
        } if (rectContatta.top < window.innerHeight) {
            loadingBarFill.style.width = "84%"
        }
    } else {
        // mobile
        if (rectAbout.top < window.innerHeight) {
            loadingBarFill.style.width = "0%"
        } if (rectEventDesign.top < window.innerHeight) {
            loadingBarFill.style.width = "15%"
        } if (rectGraficaSocial.top < window.innerHeight) {
            loadingBarFill.style.width = "30%"
        } if (rectImpaginazione.top < window.innerHeight) {
            loadingBarFill.style.width = "45%"
        } if (rectLoghi.top < window.innerHeight) {
            loadingBarFill.style.width = "70%"
        } if (rectContatta.top < window.innerHeight) {
            loadingBarFill.style.width = "84%"
        }


    }


})

// set background when hovering over Invia button
// submitBtn = document.querySelector("#submit-btn")
// pageWrapper = document.querySelector(".wrapper")

// submitBtn.addEventListener("mouseover", () => {
//     console.log("hover")
//     pageWrapper.style.backgroundColor = "purple"
// })



// const arrayOfTitoli = document.querySelectorAll(".hero-titolo")
// console.log(arrayOfTitoli)
// const arrayOfRects = []
// arrayOfTitoli.forEach(titolo => {
//     arrayOfRects.push(titolo.getBoundingClientRect())
//     return arrayOfRects
// })
// console.log("arrayofrects: ", arrayOfRects)

// document.addEventListener('scroll', () => {
//     arrayOfRects.forEach(rect => {
//         if (rect.top < window.innerHeight) {
//             loadingfill = 100 / (arrayOfRects.length * arrayOfRects.indexOf(rect) + 1)
//                 + "%"
//             loadingBarFill.style.width = loadingfill
//             console.log(loadingfill)
//         }
//     })
// })