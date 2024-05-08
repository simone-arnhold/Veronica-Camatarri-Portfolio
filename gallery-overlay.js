// window.addEventListener('load', function () {

const nodeArray = document.querySelectorAll(".grid-image")

// convert imagesArray nodelist to src
const imagesArray = Array.from(nodeArray).map(img => img.src)
console.log("imagesArray: ", imagesArray)
const gridItems = document.querySelectorAll(".grid-item")

// setup gallery overlay
const galleryOverlay = document.querySelector(".gallery-overlay")
let overlayImage = document.querySelector(".gallery-overlay-image")
let overlayTitle = document.querySelector(".gallery-overlay-title")
const galleryOverlayOuterbox = document.querySelector(".gallery-overlay-outerbox")

// close button logic
let closeButton = document.querySelector(".close-button")
function closeOverlay() {
  galleryOverlay.style.visibility = "hidden"
}
// necessary to stop clicks on the image from closing the overlay
galleryOverlayOuterbox.addEventListener("click", (e) => { e.stopPropagation() })
galleryOverlay.addEventListener("click", closeOverlay)
closeButton.addEventListener("click", closeOverlay)

function makeOverlayTitle(_imgURL) {
  // console.log("_imgurl: ", _imgURL)
  // let newOverlayTitle = _imgURL
  //   .substring(_imgURL.toString().lastIndexOf("/") + 1, _imgURL.lastIndexOf("."))
  //   .replaceAll("-", " ")
  //   .replaceAll(/%20/g, " ")
  //   .replaceAll("_", " ")
  overlayImage.src = _imgURL
  // overlayTitle.innerHTML = `${newOverlayTitle}`
}

gridItems.forEach((gridItem) => {
  gridItem.addEventListener("click", () => {
    // let imgURL = gridItem.querySelector("img").src
    // let gridImage = gridItem.ch
    let imgURL = gridItem.querySelector("img").src
    // console.log("imgurl: ", imgURL)
    overlayImage = document.querySelector(".gallery-overlay-image")
    // overlayTitle = document.querySelector(".gallery-overlay-title")
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
      // bug: fails to show last image
      console.log("index:", imgIndex)
      console.log(imagesArray.length)
      if (imgIndex >= imagesArray.length - 1) {
        imgIndex = 0
      }
    }
    // overlayImage.src = folder + "/" + imagesArray[imgIndex]
    overlayImage.src = imagesArray[imgIndex]
    // console.log("new imgIndex: " + imgIndex)

    // console.log(overlayImage.src)
    // makeOverlayTitle(overlayImage)
  })
})
// })