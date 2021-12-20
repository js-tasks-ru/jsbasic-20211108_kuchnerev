import createElement from '../../assets/lib/create-element.js';


export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    

    this.ourHtml = `
    <div class="container">

  <div class="carousel">
   <div class="carousel__arrow carousel__arrow_right">
    <img src="/assets/images/icons/angle-icon.svg" alt="icon">
  </div>

  <div class="carousel__arrow carousel__arrow_left">
    <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
  </div>

  <div class="carousel__inner">`+ this.slides.map(slide => 
    `
    <div class="carousel__slide" data-id="${slide.id}">
    <img src="/assets/images/carousel/${slide.image}" class="carousel__img" alt="slide">
    <div class="carousel__caption">
      <span class="carousel__price">€${slide.price.toFixed(2)}</span>
      <div class="carousel__title">${slide.name}</div>
      <button type="button" class="carousel__button">
        <img src="/assets/images/icons/plus-icon.svg" alt="icon">
      </button>
    </div>
  </div> `).join('') + 
  `</div>
    </div>`;

   
  this.elem = createElement(this.ourHtml);
   
  this.customCall();
  this.initCarousel();
   
  }
  
  initCarousel(){
    let frameCarousel = this.elem.querySelector('.carousel__inner');
    let buttonRight = this.elem.querySelector('.carousel__arrow_right');
    let buttonLeft = this.elem.querySelector('.carousel__arrow_left');
    let pos = 0;
    let shift = 0;
    let quantitySlide = this.slides.length;
    buttonLeft.style.display = 'none'

    this.elem.querySelector('.carousel').addEventListener('click', (ev) => {
     
    let widthOneSlide = this.elem.querySelector('.carousel__slide').offsetWidth;
    
      if(ev.target === buttonRight && pos < quantitySlide){
        pos += +1;
        shift = shift+ widthOneSlide;
        frameCarousel.style.transform = `translateX(-${shift}px)`;
    }
    if(ev.target === buttonLeft && pos > 0){
      pos += -1;
      shift = shift- widthOneSlide;
      frameCarousel.style.transform = `translateX(-${shift}px)`
    }
    if(pos > 0){
      buttonLeft.style.display = ''
    }
    else{
      buttonLeft.style.display = 'none'
    }
    if(pos > quantitySlide-2){
      buttonRight.style.display = 'none'
    }
    else{
      buttonRight.style.display = ''
    }
   
    
      }
      )
    }

  customCall(){
    const button = this.elem.querySelectorAll('.carousel__button');
    button.forEach(element => {
      element.addEventListener('click',this.buttonClick);

    });
  }

  buttonClick = (e) => {
 const slideId = e.target.closest('.carousel__slide').dataset.id;
     
    const event = new CustomEvent("product-add", {
      bubbles: true,
      detail:slideId
    });
    this.elem.dispatchEvent(event);
    }
  }
