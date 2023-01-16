$(window).on("load", function () {
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

  const folder = "/images/Banners_Vero_jpg"
  // const folder = "other_images/"
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

              title = val.match(/\/.*\/(.*)\.(jpe?g|png|gif)/)[1]
              // .replaceAll("-", " ")
              // .replaceAll(/%20/g, " ")
              // .replaceAll("_", " ")

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

  //old grid-item with ahref
  // `<div class="grid-item">
  //   <a href="${val}"><img class="grid-image" src="${val}" alt=""></a>
  // </div>`

  // function applyNotHoveredToOthers() {
  //   $(".grid-image").toggleClass("not-hovered");
  // }

  // $(".grid-image").hover(
  //   applyNotHoveredToOthers
  // )
  // https://stackoverflow.com/questions/3572224/how-to-select-all-class-except-the-clicked-element-in-jquery

  // function addHover() {
  //   console.log("hovered on image")
  //   $(this).addClass("not-hovered")
  // }
  // function removeHover() {
  //   $(this).removeClass("not-hovered")
  // }

  // console.log("hovered on image")
  // $(this).addClass("not-hovered")

  // $(".grid-image")
  //   .not(this)
  //   .each(function () {
  //     $(this).toggleClass("not-hovered")
  //   })

  //initializes masonry after loading all images

  // var $grid = $(".grid").imagesLoaded(function () {
  //   $(".grid").masonry({
  //     // options...
  //     itemSelector: ".grid-item",
  //     // columnWidth: 360,
  //     // columnWidth: ".grid-sizer",
  //     // percentPosition: true,
  //     isFitWidth: true,
  //   })
  // })

  // $(".grid-item").hover(function () {
  //   console.log("hovered on image")
  //   $(this).toggleClass("not-hovered")
  // })

  // const imgs = document.querySelectorAll(".grid-image")

  // processImages().Wait()

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

    gridItems.forEach((gridItem) => {
      gridItem.addEventListener("click", () => {
        let imgURL = gridItem.querySelector("img").src
        overlayImage = document.querySelector(".gallery-overlay-image")
        // console.log(overlayImage)
        overlayTitle = document.querySelector(".gallery-overlay-title")
        let newOverlayTitle = imgURL.substring(
          imgURL.lastIndexOf("/") + 1,
          imgURL.lastIndexOf(".")
        )
        overlayImage.src = imgURL
        overlayTitle.innerHTML = `${newOverlayTitle}`

        galleryOverlay.style.visibility = "visible"
      })
    })

    //TODO everything is broken past this

    // prev next nav button logic
    const direction = ["left", "right"]
    const prevBtn = document.querySelector(".gallery-overlay-prev")
    const nextBtn = document.querySelector(".gallery-overlay-next")

    prevBtn.addEventListener("click", () => {
      // rewrite

      // let overlayImageURL = document
      //   .querySelector(".gallery-overlay-image")
      //   .getAttribute("src")
      // console.log(overlayImageURL)

      // overlayImageURL =
      //   folder + overlayImageURL.substring(overlayImageURL.lastIndexOf("/"))
      // // folder + overlayImageURL.substring(overlayImageURL.lastIndexOf("/") + 1)
      // console.log("overlayImageURL: " + overlayImageURL)
      // console.log(imagesArray)

      // // check index of current image
      // let imgIndex = imagesArray.indexOf(overlayImageURL)
      // console.log("imgIndex: " + imgIndex)

      // // put the previous image in the index as overlayImage
      // // if (imgIndex < 1) {
      // //   // loop array
      // //   imgIndex = imagesArray.length - 1
      // //   console.log("reset imgIndex: " + imgIndex)
      // // }
      // overlayImage.src = imagesArray[imgIndex - 1]
      // // add go-to-right option

      // console.log(overlayImage.src)
      // // overlayTitle = CreateNewOverlayTitle()

      //
      //test
      let overlayImageURL = document
        .querySelector(".gallery-overlay-image")
        .getAttribute("src")
      console.log("overlayImageURL: " + overlayImageURL)
      console.log(imagesArray)
      console.log("lastindex: " + overlayImageURL.lastIndexOf(folder))

      let imageName = overlayImageURL.substring(
        overlayImageURL.lastIndexOf(folder + 1)
      )
      // console.log(folder)
      console.log("imageName: " + imageName)
    })
  })
})
