import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {
   
    this.ourHtml = `
    <div class="container">
  
  <div class="modal">
    
    <div class="modal__overlay"></div>

    <div class="modal__inner">
      <div class="modal__header">
        
        <button type="button" class="modal__close">
          <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
        </button>

        <h3 class="modal__title">
       
        </h3>
      </div>

      <div class="modal__body">
      
      </div>
    </div>

  </div>
</div>`
  
  }
  setTitle(title) {
    this.title = title;
    return this.title
  }

  setBody(bodyForm){
    this.bodyForm = bodyForm.outerHTML
    return this.bodyForm;
  }

  open(){
    document.body.insertAdjacentHTML('afterbegin',this.ourHtml);
    document.body.querySelector('.modal__title').textContent = this.title;
    document.body.querySelector('.modal__body').innerHTML = this.bodyForm;
    document.body.classList.add('is-modal-open');
    document.querySelector('.modal__close').addEventListener('click', this.close);
    document.addEventListener('keydown',function(event){
      if(event.code === 'Escape') {
        document.body.querySelector('.modal').closest('.container').remove();
        document.body.classList.remove('is-modal-open');
        document.removeEventListener('keydown', _);
      };
    });
  }
  close(){
    document.body.querySelector('.modal').closest('.container').remove();
    document.body.classList.remove('is-modal-open');
    document.removeEventListener('keydown', _);
    
  }
 }

  
  
  

