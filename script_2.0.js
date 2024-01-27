// let text1 = document.getElementById("menu-item-1");
// let text2 = document.getElementById("menu-item-2");
// let text3 = document.getElementById("menu-item-3");
// let text4 = document.getElementById("menu-item-4");


// function typeWriter(element, text, speed) {
//     let i = 0;
//     function type() {
//         if (i < text.length) {
//             element.innerHTML += text.charAt(i);
//             i++;
//             setTimeout(type, speed);
//         }
//     }
//     type();
// }

// typeWriter(text1, " Curriculum //", 50);
// typeWriter(text2, " Graphic Design //", 50);
// typeWriter(text3, " About //", 50);
// typeWriter(text4, " Contact //", 50);

// sidenav logic
const sidenav = document.querySelector(".sidenav")
function openNav() {
    sidenav.style.width = "300px"
    setTimeout(function () {
        document.querySelector(".closebtn").style.opacity = "1";
    }, 300);
}
function closeNav() {
    sidenav.style.width = "0"
    document.querySelector(".closebtn").style.opacity = "0";
}