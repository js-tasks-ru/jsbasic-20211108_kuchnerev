import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;

    this.ourHtml =` <div class="ribbon">
    
    <button class="ribbon__arrow ribbon__arrow_left ribbon__arrow_visible">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </button>

   
    <nav class="ribbon__inner">
      <a href="#" class="ribbon__item ribbon__item_active" data-id="">All</a>
      <a href="#" class="ribbon__item" data-id="salads">Salads</a>
      <a href="#" class="ribbon__item" data-id="soups">Soups</a>
      <a href="#" class="ribbon__item" data-id="chicken-dishes">Chicken dishes</a>
      <a href="#" class="ribbon__item" data-id="beef-dishes">Beef dishes</a>
      <a href="#" class="ribbon__item" data-id="seafood-dishes">Seafood dishes</a>
      <a href="#" class="ribbon__item" data-id="vegetable-dishes">Vegetable dishes</a>
      <a href="#" class="ribbon__item" data-id="bits-and-bites">Bits and bites</a>
      <a href="#" class="ribbon__item" data-id="on-the-side ribbon__item_active">On the side</a>
    </nav>

   
    <button class="ribbon__arrow ribbon__arrow_right">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </button>
  </div>`;
  
  this.elem = createElement(this.ourHtml);
  this.slide();
  this.select();
  }


  slide(){
    const arrow = this.elem.querySelectorAll('.ribbon__arrow');
    const arrowRight = this.elem.querySelector('.ribbon__arrow_right');
    const arrowLeft = this.elem.querySelector('.ribbon__arrow_left');
    const ribbonInner = this.elem.querySelector('.ribbon__inner');
    arrowRight.classList.add('ribbon__arrow_visible');
    arrowLeft.classList.remove('ribbon__arrow_visible');
    
    arrow.forEach(element => {
      element.addEventListener('click',slick);
    });

    ribbonInner.addEventListener('scroll', ourScroll);

    function ourScroll(){
      const scrollWidth = ribbonInner.scrollWidth;
      const scrollLeft = ribbonInner.scrollLeft;
      const clientWidth = ribbonInner.clientWidth;
      const scrollRight = scrollWidth - scrollLeft - clientWidth;
      
      
      if(scrollLeft > 0){
        arrowLeft.classList.add('ribbon__arrow_visible');
        arrowRight.classList.add('ribbon__arrow_visible');
      }
      if(scrollLeft <= 0){
        arrowLeft.classList.remove('ribbon__arrow_visible');
      }
      if(scrollRight < 1){
        arrowRight.classList.remove('ribbon__arrow_visible');
      }
    }
    
    function slick(){
    
        
    if(this === arrowRight){
      ribbonInner.scrollBy(350,0);
     }
     if(this === arrowLeft){
      ribbonInner.scrollBy(-350,0);
     }
    }
  }

  select(){
    const link = this.elem.querySelectorAll('a');
    link.forEach(element => {
      element.addEventListener('click',chois);
    })
    
    function chois(ev){
      ev.preventDefault();
      link.forEach(element => {
          if(element.classList.contains('ribbon__item_active')){
            element.classList.remove('ribbon__item_active');
          }
        })
          this.classList.add('ribbon__item_active');

          const categoryId = this.dataset.id;
          
          const event = new CustomEvent('ribbon-select', {
            bubbles: true,
            detail:categoryId
          });
          this.elem.dispatchEvent(event);
      }
  }
     
  }

