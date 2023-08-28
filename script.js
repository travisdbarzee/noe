//Adding background color to navbar when sliding down the page
window.onscroll = () => {
  scrollNavbar();
};

scrollNavbar = () => {
  const navBar = document.getElementById("myTopnav");
  if (document.documentElement.scrollTop > 500) {
    navBar.classList.add("fixed-color");
  } else {
    navBar.classList.remove("fixed-color");
  }
};

//Navbar responsivness
function navDropdown() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


//Ensemble Affiliations section
const highlights = document.querySelectorAll(".highlight");
const quotes = document.querySelectorAll(".highlight-quote");


highlights.forEach((highlight) => {
  highlight.addEventListener("click", (e) => {
    if (e.target.parentElement.classList.contains("highlight")) {
      addActiveQuote(e);
    } else {
      removeActiveQuote()
    }
    highlight.classList.remove("visible-quote")
  });
});


function addActiveQuote(e) {
  var imgEffect = e.srcElement.parentElement.children[0]
  var quote = e.srcElement.parentElement.children[1]
  var logoMove = e.srcElement.parentElement.children[2]
  if (!quote.classList.contains("visible-quote")) {
    removeActiveQuote();
    quote.classList.add("visible-quote")
    imgEffect.classList.add("opaque-img")
    logoMove.classList.add("move")
  } else {
    removeActiveQuote()
  }
}

function removeActiveQuote() {
  quotes.forEach((quote) => {
    quote.classList.remove("visible-quote")
  })
}

document.addEventListener("click", (event) => {
  let popups = document.getElementsByClassName("visible-quote")

  for (let i = 0; i < popups.length; i++) {
    if (
      popups[i].parentNode != event.target.parentNode &&
      !popups[i].contains(event.target)
    ) {
      popups[i].classList.toggle("visible-quote")
      i--;
    }
  }
});

document.addEventListener("click", (e) => {
  let opacity = document.getElementsByClassName("opaque-img")

  for (let i = 0; i < opacity.length; i++) {
    if (
      opacity[i].parentNode != e.target.parentNode && 
      !opacity[i].contains(e.target)
    ) {
      opacity[i].classList.toggle("opaque-img")
      i--
    }
  }
})

document.addEventListener("click", (e) => {
  let moveLogo = document.getElementsByClassName("move")
  for (let i = 0; i < moveLogo.length; i++) {
    if (
      moveLogo[i].parentNode != e.target.parentNode && 
      !moveLogo[i].contains(e.target)
    ) {
      moveLogo[i].classList.toggle("move")
      i--
    }
  }
})


//Client Voices section
const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active-panel");
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active-panel");
  });
}


// Model Drill section
const slides = document.querySelectorAll(".slides");
const circle = document.querySelectorAll(".fa-circle");

let activeSlide = 0;
let activeCircle = 0;

function setActiveSlide() {
  slides.forEach((slide) => slide.classList.remove("slides-active"));
  slides[activeSlide].classList.add("slides-active");
}

function setActiveCircle() {
  circle.forEach((circle) => circle.classList.remove("circle-active"));
  circle[activeCircle].classList.add("circle-active");
}

function prevSlide() {
  if (activeSlide == 0) {
    activeSlide = 3;
    activeCircle = 3;
  } else {
    activeSlide--;
    activeCircle--;
  }
  setActiveSlide();
  setActiveCircle();
}

function nextSlide() {
  if (activeSlide == 3) {
    activeSlide = 0;
    activeCircle = 0;
  } else {
    activeSlide++;
    activeCircle++;
  }
  setActiveSlide();
  setActiveCircle();
}
const leftArrow = document.getElementById("go-left");
const rightArrow = document.getElementById("go-right");

leftArrow.addEventListener("click", () => {
  leftArrow.classList.add("yellow");
  leftArrow.style.transition = "0.2s linear";
  setTimeout(() => leftArrow.classList.remove("yellow"), 300);
});

rightArrow.addEventListener("click", () => {
  rightArrow.classList.add("yellow");
  rightArrow.style.transition = "0.2s linear";
  setTimeout(() => rightArrow.classList.remove("yellow"), 300);
});
