$(window).on("load", function () {
  const folder = "/other_images_temp/"

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
              title = val
                .match(/\/.*\/(.*)\.(jpe?g|png|gif)/)[1]
                .replaceAll("-", " ")

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
    let overlayImage = document.querySelector(".gallery-overlay-image")
    let overlayTitle = document.querySelector(".gallery-overlay-title")
    // console.log(gridItems)

    // setup gallery overlay
    // const galleryOverlay = document.querySelector(".gallery-overlay")

    gridItems.forEach((gridItem) => {
      gridItem.addEventListener("click", () => {
        let imgURL = gridItem.querySelector("img").src

        console.log(imgURL)

        overlayImage.src = imgURL

        // galleryOverlay.style.backgroundImage = `url("${imgURL}")`
        // galleryOverlay.style.display = "block"
      })
    })
    // todo dev remove
    overlayImage.src = "other_images_temp\\Black-And-Silver-Laptop.jpg"
    ovTitle = overlayImage.src.substring(
      overlayImage.src.lastIndexOf("/") + 1,
      overlayImage.src.lastIndexOf(".")
    )
    overlayTitle.innerHTML = `${ovTitle}`
  })
})
