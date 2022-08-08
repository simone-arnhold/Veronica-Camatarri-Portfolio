$(window).on("load", function () {
  // var $grid = $(".grid").imagesLoaded(function () {
  //   // init Masonry after all images have loaded
  //   $grid.masonry({
  //     // options...
  //     columnWidth: 80,
  //     itemSelector: ".grid-item",
  //   })
  // })

  // $grid.imagesLoaded().progress(function () {
  //   $grid.masonry("layout")
  // })

  const folder = "/other_images_temp/"

  function processImages() {
    $.ajax({
      // type: "method",
      url: folder,
      async: false,
      // data: "data",
      // dataType: "dataType",
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

  $.when(processImages()).done(function () {
    const gridItems = document.querySelectorAll(".grid-item")
    console.log(gridItems)

    const galleryOverlay = document.querySelector(".gallery-overlay")

    gridItems.forEach((gridItem) => {
      gridItem.addEventListener("click", () => {
        let imgURL = gridItem.querySelector("img").src
        console.log(imgURL)
        galleryOverlay.style.backgroundImage = `url("${imgURL}")`
        galleryOverlay.style.display = "block"
      })
    })
  })

  // const testImg = document.querySelector(".grid-image")
  // const testDiv = document.querySelector(".grid-item")

  // testImg.addEventListener("click", () => {
  //   console.log("clicked image")
  // })

  // testDiv.addEventListener("click", () => {
  //   console.log("clicked div")
  //   let varImgURL = testDiv.querySelector("img").src
  //   galleryOverlay.style.backgroundImage = `url("${varImgURL}")`
  //   galleryOverlay.style.display = "block"
  //   console.log(varImgURL)
  // })
})
