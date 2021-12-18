function initCarousel() {
  let frameCarousel = document.querySelector('.carousel__inner');
  let widthOneSlide = document.querySelector('.carousel__slide').offsetWidth;
  let buttonRight = document.querySelector('.carousel__arrow_right');
  let buttonLeft = document.querySelector('.carousel__arrow_left');
  let pos = 0;
  let shift = 0;
  buttonLeft.style.display = 'none'
document.querySelector('.carousel').addEventListener('click', function(ev){
  
    
    if(ev.target === buttonRight && pos < 4){
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
  if(pos > 2){
    buttonRight.style.display = 'none'
  }
  else{
    buttonRight.style.display = ''
  }
  
    })
}
