window.addEventListener("load", function () {
  // mobile nav logic
  const mobileNav = document.querySelector(".hamburger")
  const navMenu = document.querySelector(".mobile-nav")
  const mobileNavBtn = mobileNav.children[0]
  mobileNav.addEventListener("click", () => {
    navMenu.classList.toggle("open")
    if (mobileNavBtn.classList.contains("fa-bars")) {
      mobileNavBtn.classList.remove("fa-bars")
      mobileNavBtn.classList.add("fa-x")
    } else {
      mobileNavBtn.classList.remove("fa-x")
      mobileNavBtn.classList.add("fa-bars")
    }
  })
})
