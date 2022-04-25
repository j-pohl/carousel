const slides = document.getElementsByClassName("carousel-item") // link slides to DOM elements

let slidePosition = 0; // starting index position

const totalSlides = slides.length // total length of array

const moveToNextSlide = () => {
    
console.log("moving to next slide")
if (slidePosition === totalSlides -1) { // if this current slide is the last slide
    slidePosition = 0 // start from first slide, otherwise error as array only 3 long
} else {
    slidePosition ++ // go to next slide
}

slides[slidePosition].classList.add("carousel-item-visible")
//add the class name of carousel-item-visible t our current slide
}

const moveToPrevSlide = () => {
console.log("moving to prevous slide")
}

document.getElementById("carousel-button-prev").addEventListener("click", moveToPrevSlide)
document.getElementById("carousel-button-next").addEventListener("click", moveToNextSlide)


console.log(slides)


// :)