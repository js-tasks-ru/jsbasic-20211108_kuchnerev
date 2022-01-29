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
    const sliderElement = this.elem;
    const step = this.steps;
    const segments = step - 1;
    const defaultActiveSpan = this.elem.querySelector('.slider__steps').children[this.value];
    const progress = this.elem.querySelector('.slider__progress');
    const thumb = this.elem.querySelector('.slider__thumb');
    const sliderValue = this.elem.querySelector('.slider__value');
    const sliderStep = sliderElement.querySelector('.slider__steps');
    const allSpan = sliderStep.children;
    thumb.style.touchAction = "none";
    sliderValue.textContent = this.value;
    defaultActiveSpan.classList.add('slider__step-active');

    sliderElement.addEventListener('click', clickTarget);
    

    function clickTarget(ev){
      const left = ev.clientX - this.getBoundingClientRect().left;
      const leftRelative = left/this.offsetWidth;
      const approximateValue = leftRelative * segments;
      const value = Math.round(approximateValue);
      const valuePercents = value / segments * 100;
      const spanActive = sliderStep.children[value];

      sliderValue.textContent = value;
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


    thumb.onpointerdown = function() {
      thumb.ondragstart = () => false;
     
      document.addEventListener('pointermove', onMouseMove);
      document.addEventListener('pointerup', onMouseUp);
      this.sliderElement;

      function onMouseMove (ev){
       const left = ev.clientX - sliderElement.getBoundingClientRect().left;
       const leftRelative = left / sliderElement.offsetWidth;
       const approximateValue = leftRelative * segments;
       const value = Math.round(approximateValue);
       const spanActive = sliderStep.children[value];
       
      if (leftRelative < 0) {
        leftRelative = 0;
      }
      
      if (leftRelative > 1) {
        leftRelative = 1;
      }
      const leftPercents = leftRelative * 100;
      thumb.style.left = `${leftPercents}%`;
      progress.style.width = `${leftPercents}%`;
      sliderElement.classList.add('slider_dragging');
      sliderValue.textContent = value;

      if(spanActive.className !== 'slider__step-active'){
        Array.from(allSpan).forEach(element => element.classList.remove('slider__step-active'));
        spanActive.classList.add('slider__step-active');
      }
      }

      function onMouseUp(ev) {
        const left = ev.clientX - sliderElement.getBoundingClientRect().left;
        const leftRelative = left / sliderElement.offsetWidth;
        const approximateValue = leftRelative * segments;
        const value = Math.round(approximateValue);
        const leftPercents = value / segments * 100;
        thumb.style.left = `${leftPercents}%`;
        progress.style.width = `${leftPercents}%`;
        document.removeEventListener('pointerup', onMouseUp);
        document.removeEventListener('pointermove', onMouseMove);
        
        sliderElement.classList.remove('slider_dragging');
        const event = new CustomEvent('slider-change', { 
          detail: value, 
          bubbles: true 
        });
        this.dispatchEvent(event);
       
      } 
     
    }
   
  }
    
}

