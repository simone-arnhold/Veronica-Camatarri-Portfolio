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
document.addEventListener('scroll', () => {

    const anchorElement = document.getElementById("event_design")
    const rect = anchorElement.getBoundingClientRect()

    // Check if the anchor tag is visible in the viewport
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        console.log('Anchor tag is visible!');
        // Your custom logic here (e.g., update UI, trigger an action, etc.)
    }
})

// temp scrollbar
function getScrollPercent() {

    const winHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;
    const scrollTop = window.scrollY; // NaN or zero at the top
    const trackLength = docHeight - winHeight;
    const pctScrolled = Math.floor(scrollTop / trackLength * 100)
    const loadingBarFill = document.querySelector(".loadingbar-fill")
    loadingBarFill.style.width = pctScrolled + "%"
    console.log(pctScrolled)
}

window.addEventListener("scroll", getScrollPercent)


console.log(hero_titoli)
// cose da fare: 23/04/2024
// trova un modo per gestire l'array hero_titoli (i bottoni delle categorie) e identificare quando uno di questi viene superato con scroll
// dopodichè gestisci la barra di progressione in base a quali anchor tag sono stati superati