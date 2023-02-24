// html eliment find wrapper here 
const parentWrapper = document.querySelector('.wrapper');
// html eliment find carousel here 
const childCarousel = document.querySelector('.carousel');
// html eliment find imgPrint here 
const image = document.querySelectorAll('.imgPrint');
// html eliment find btn here 
const buttons = document.querySelectorAll('.btn');


let imageIndex = 1;
let interValId;

// Difine function to start to automatic slider 
const autoSlide = () => {
    // inter valId start 2 second 
    interValId = setInterval(() => slideImg(++imageIndex), 2000);

}


// A function slideImg create 
const slideImg = () => {
    // calculate image index 
    imageIndex = imageIndex == image.length ? 0 : imageIndex < 0 ? image.length -1 : imageIndex; 
    // update carousel
    childCarousel.style.transform = `translate(-${imageIndex * 100}%)` 
};


// click listener create 
const updatClick = (e) => {
    // stop automatic slide show 
    clearInterval(interValId);
    // calculate imageIndex
    imageIndex += e.target.id === 'next' ? 1 : -1;
    
    // slideImg function calling
    slideImg(imageIndex);
    
    // autoSlide function calling 
    autoSlide();
}

buttons.forEach((button) => button.addEventListener('click', updatClick));


// event listener create mouseover
parentWrapper.addEventListener('mouseover', () => clearInterval(interValId));

// event listener create mouseleave
parentWrapper.addEventListener('mouseleave', () => autoSlide());
