// Screen load effect w/delay
window.onload = (setTimeout(imageChange, 800));

function imageChange() {
  const titleImg = document.getElementById("header-img");
  titleImg.classList.add("img-change");
}

// Responsive Navbar
function navDropdown() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// Slide through shows
const slides = document.querySelectorAll('.slide')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

let activeSlide = 0

rightBtn.addEventListener('click', () => {
    activeSlide++

    if(activeSlide > slides.length - 1) {
        activeSlide = 0
    }
    setActiveSlide()
})

leftBtn.addEventListener('click', () => {
    activeSlide--

    if(activeSlide < 0) {
        activeSlide = slides.length - 1
    }
    setActiveSlide()
})

function setActiveSlide() {
    slides.forEach(slide => slide.classList.remove('active'))

    slides[activeSlide].classList.add('active')
}
