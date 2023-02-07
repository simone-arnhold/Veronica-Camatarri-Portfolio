$(window).on("load", function () {
  // if ($("body").is(".index")) {
  //only apply the following to .index page
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

  /*

  // const folder = "/Lavori per Sito"
  // const folder = "/images/Banners_Vero_jpg"
  const folder = "./other_images"
  let imagesArray = []

  // todo make async
  function processImages() {
    $.ajax({
      // type: "method",
      url: folder,
      async: false, //todo
      success: function (data) {
        $(data)
          .find("a")
          .attr("href", function (i, val) {
            if (val.match(/\.(jpe?g|png|gif)$/)) {
              imagesArray.push(val.substring(val.lastIndexOf("/") + 1))

              title = val
                .match(/\/.*\/(.*)\.(jpe?g|png|gif)/)[1]
                .replaceAll("-", " ")
                .replaceAll(/%20/g, " ")
                .replaceAll("_", " ")

              $(".grid").append(
                `
              <div class="grid-item">
                <img class="grid-image" src="${val}" alt="">
                <div class="grid-image-overlay" >
                      <span class="grid-image-text">${title}</span>
                </div>
              </div>`
              )
              // must wait until ajax finishes
            }
          })
      },
    })
  }

  // gallery overlay logic
  $.when(processImages()).done(() => {
    let gridItems = document.querySelectorAll(".grid-item")
    // let overlayImage = document.querySelector(".gallery-overlay-image")
    // let overlayTitle = document.querySelector(".gallery-overlay-title")

    // console.log(gridItems)

    // close button logic
    let closeBtn = document.querySelector(".close-button")
    closeBtn.addEventListener("click", () => {
      galleryOverlay.style.visibility = "hidden"
    })

    // setup gallery overlay
    const galleryOverlay = document.querySelector(".gallery-overlay")
    let overlayImage = document.querySelector(".gallery-overlay-image")
    let overlayTitle = document.querySelector(".gallery-overlay-title")

    function makeOverlayTitle(_imgURL) {
      let newOverlayTitle = _imgURL
        .substring(_imgURL.lastIndexOf("/") + 1, _imgURL.lastIndexOf("."))
        .replaceAll("-", " ")
        .replaceAll(/%20/g, " ")
        .replaceAll("_", " ")
      overlayImage.src = _imgURL
      overlayTitle.innerHTML = `${newOverlayTitle}`
    }

    gridItems.forEach((gridItem) => {
      gridItem.addEventListener("click", () => {
        let imgURL = gridItem.querySelector("img").src
        overlayImage = document.querySelector(".gallery-overlay-image")
        // console.log(overlayImage)
        overlayTitle = document.querySelector(".gallery-overlay-title")

        makeOverlayTitle(imgURL)
        galleryOverlay.style.visibility = "visible"
      })
    })

    // prev next nav button logic

    const prevBtn = document.querySelector(".gallery-overlay-prev")
    const nextBtn = document.querySelector(".gallery-overlay-next")

    const btnArray = [prevBtn, nextBtn]

    btnArray.forEach((elem) => {
      elem.addEventListener("click", (e) => {
        let overlayImageURL = document
          .querySelector(".gallery-overlay-image")
          .getAttribute("src")
        console.log(overlayImageURL)

        overlayImageURL = overlayImageURL.substring(
          overlayImageURL.lastIndexOf("/") + 1
        )

        console.log("overlayImageURL: " + overlayImageURL)
        console.log(imagesArray)

        // check index of current image
        let imgIndex = imagesArray.indexOf(overlayImageURL)
        console.log("current imgIndex: " + imgIndex)

        // put the previous image in the index as overlayImage

        //prevBtn
        if (e.target == prevBtn) {
          imgIndex--
          if (imgIndex < 0) {
            // loop array to the end
            imgIndex = imagesArray.length - 1
            console.log("reset imgIndex: " + imgIndex)
          }
        }
        //nextBtn
        if (e.target == nextBtn) {
          imgIndex++
          if (imgIndex >= imagesArray.length) {
            imgIndex = 0
          }
        }
        overlayImage.src = folder + "/" + imagesArray[imgIndex]
        console.log("new imgIndex: " + imgIndex)

        console.log(overlayImage.src)
        makeOverlayTitle(overlayImage.src)
      })
    })
  })
  */
  // }
})
