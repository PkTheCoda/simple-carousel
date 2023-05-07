// document.getElementById('1').addEventListener('click', () => {
//     alert("Hello World")
// })

const previousButton = document.querySelector(".prev")
const nextButton = document.querySelector(".next")

let imgNum = 1;

setInterval(function() {
    document.getElementById(`${imgNum}`).classList.toggle("hidden")

    if (imgNum == 5) {
        imgNum = 1;
    } else {
        imgNum += 1;
    }

    document.getElementById(`${imgNum}`).classList.toggle("hidden")
}, 5000); // 5000 milliseconds = 5 seconds

  



nextButton.addEventListener('click', () => {

    document.getElementById(`${imgNum}`).classList.toggle("hidden")

    if (imgNum == 5) {
        imgNum = 1;
    } else {
        imgNum += 1;
    }

    document.getElementById(`${imgNum}`).classList.toggle("hidden")
})

previousButton.addEventListener('click', () => {

    document.getElementById(`${imgNum}`).classList.toggle("hidden")

    if (imgNum == 1) {
        imgNum = 5;
    } else {
        imgNum -= 1;
    }

    document.getElementById(`${imgNum}`).classList.toggle("hidden")

})

