import createElement from '../../assets/lib/create-element.js';
export default class StepSlider {
  constructor({ steps, value = 1 }) {
    
    this.steps = steps;
    this.value = value;
    this.percent = 330/(steps-1)/330*100*value;
    this.span = `<span></span>`;
  
   for(let i = 0; i < this.steps-1; i++){
      this.span += `<span></span>`;
   };
       
    this.ourHtml = `<div class="slider">
    <div class="slider__thumb" style="left: ${this.percent}%;">
      <span class="slider__value"></span>
    </div>
    <div class="slider__progress" style="width: ${this.percent}%;"></div>
    <div class="slider__steps">
      ${this.span}
    </div>
  </div>`;

    this.elem = createElement(this.ourHtml);
    this.clickSteps();
  }

  
  clickSteps(ev){
    const sliderClick = this.elem;
    const step = this.steps;
    const segments = step - 1;
    const widthSlider = sliderClick.offsetWidth;
    const defaultActiveSpan = this.elem.querySelector('.slider__steps').children[this.value];
    this.elem.querySelector('.slider__value').textContent = this.value;
    defaultActiveSpan.classList.add('slider__step-active');

    sliderClick.addEventListener('click', clickTarget);
    

    function clickTarget(ev){
      const left = ev.clientX - this.getBoundingClientRect().left;
      const leftRelative = left/this.offsetWidth;
      const approximateValue = leftRelative * segments;
      const value = Math.round(approximateValue);
      const valuePercents = value / segments * 100;
      const thumb = this.querySelector('.slider__thumb');
      const progress = this.querySelector('.slider__progress');
      const spanActive = this.querySelector('.slider__steps').children[value];
      const allSpan = this.querySelector('.slider__steps').children;
      document.body.querySelector('.slider__value').textContent = value;
      thumb.style.left = `${valuePercents}%`;
      progress.style.width = `${valuePercents}%`;
    
      if(spanActive.className !== 'slider__step-active'){
        Array.from(allSpan).forEach(element => element.classList.remove('slider__step-active'));
        spanActive.classList.add('slider__step-active');
      }
     const event = new CustomEvent('slider-change', { 
        detail: value, 
        bubbles: true 
      });
      this.dispatchEvent(event);
    }
  }
  
  
}
