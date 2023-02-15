window.addEventListener('load', function () {

  const nodeArray = document.querySelectorAll(".grid-image")

  // convert imagesArray nodelist to src
  const imagesArray = Array.from(nodeArray).map(img => img.src)
  console.log("imagesArray: ", imagesArray)
  const gridItems = document.querySelectorAll(".grid-item")

  // setup gallery overlay
  const galleryOverlay = document.querySelector(".gallery-overlay")
  const galleryOverlayOuterbox = document.querySelector(".gallery-overlay-outerbox")
  let overlayImage = document.querySelector(".gallery-overlay-image")
  let overlayTitle = document.querySelector(".gallery-overlay-title")

  // close button logic
  let closeBtn = document.querySelector(".close-button")
  function closeOverlay() {
    galleryOverlay.style.visibility = "hidden"
  }
  // necessary to stop clicks on the image from closing the overlay

  galleryOverlay.addEventListener("click", closeOverlay) //todo reenable
  galleryOverlayOuterbox.addEventListener("click", (e) => { e.stopPropagation() })
  closeBtn.addEventListener("click", closeOverlay)

  function makeOverlayTitle(_imgURL) {
    // _imgURL = _imgURL.toString()
    // console.log("_imgurl: ", _imgURL)
    // console.log(typeof (_imgURL))
    let newOverlayTitle = _imgURL
      .substring(_imgURL.lastIndexOf("/") + 1, _imgURL.lastIndexOf("."))
      .replaceAll("-", " ")
      .replaceAll(/%20/g, " ")
      .replaceAll("_", " ")
    overlayImage.src = _imgURL
    overlayTitle.innerHTML = `${newOverlayTitle}`

    // console.log(typeof (_imgURL))
  }

  gridItems.forEach((gridItem) => {
    gridItem.addEventListener("click", () => {
      // let imgURL = gridItem.querySelector("img").src
      // let gridImage = gridItem.ch
      let imgURL = gridItem.querySelector("img").src
      // console.log("imgurl: ", imgURL)
      overlayImage = document.querySelector(".gallery-overlay-image")
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

      // console.log("overlayImageURL: ", overlayImageURL)

      // console.log("overlayImageURL: " + overlayImageURL)
      // console.log("imagesarray: ", imagesArray)

      // check index of current image
      let imgIndex = imagesArray.indexOf(overlayImageURL)
      // console.log("current imgIndex: " + imgIndex)

      // put the previous image in the index as overlayImage

      //prevBtn
      if (e.target == prevBtn) {
        imgIndex--
        if (imgIndex < 0) {
          // loop array to the end
          imgIndex = imagesArray.length - 1
          // console.log("reset imgIndex: " + imgIndex)
        }
      }
      //nextBtn
      if (e.target == nextBtn) {
        imgIndex++
        if (imgIndex >= imagesArray.length) {
          imgIndex = 0
        }
      }
      // overlayImage.src = folder + "/" + imagesArray[imgIndex]
      overlayImage.src = imagesArray[imgIndex]
      // console.log("new imgIndex: " + imgIndex)

      console.log(overlayImage.src)
      makeOverlayTitle(overlayImage)
    })
  })
})