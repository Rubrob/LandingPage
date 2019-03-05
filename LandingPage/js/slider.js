(function slider(parentClass, slidesClass){
  let slider   = document.querySelector(`${parentClass}`);
  let imgs     = slider.querySelectorAll(`${slidesClass}`);
  let imgsArr  = [...imgs];
  let arrowArr = [];

  
  // arrow creating
  for(let i = 0; i < 2; i++){

      let arrow = document.createElement('span');
      arrow.classList.add('slider__arrow');

      (i % 2) ? arrow.classList.add('_arrow-right') : arrow.classList.add('_arrow-left');

      arrow.addEventListener('click', function(){
        
          let current = imgsArr.filter(img => img.classList.contains('_slide-active') );
          let index   = current[0].dataset.number-1;

          if(this.classList.contains('_arrow-right')){
              current[0].classList.remove('_slide-active');
              if(index >= imgsArr.length-1){
                  index = -1;
              }
              index++;
              imgsArr[index].classList.add('_slide-active');

              if(previewContainer.children[index].previousElementSibling == null){
                  previewContainer.children[imgsArr.length-1].classList.remove('_preview-active');
              }else{
                  previewContainer.children[index].previousElementSibling.classList.remove('_preview-active');
              }
              previewContainer.children[index].classList.add('_preview-active');
          }

          if(this.classList.contains('_arrow-left')){
              current[0].classList.remove('_slide-active');
              if(index <= 0){
                  index = imgsArr.length;
              }
              index--;
              imgsArr[index].classList.add('_slide-active');
              
              if(previewContainer.children[index].nextElementSibling == null){
                  previewContainer.children[0].classList.remove('_preview-active');
              }else{
                  previewContainer.children[index].nextElementSibling.classList.remove('_preview-active');
              }
              previewContainer.children[index].classList.add('_preview-active');      
          }
                 
      });

      arrowArr.push(arrow);
  }
  let [arrowLeft, arrowRight] = arrowArr;
  

  // img/preview container creating

  let imgContainer     = document.createElement('div');
  let previewContainer = document.createElement('div');
  let previewArr       = [];

  imgContainer.classList.add('slider__slides');
  previewContainer.classList.add('slider__preview');

  for(let i = 0; i < imgs.length; i++){
    
      let frag = document.createDocumentFragment();
      frag.appendChild(imgs[i])
      imgContainer.appendChild(frag)

      let previewElem = document.createElement('div');
      if(i == 0){
          previewElem.classList.add('_preview-active');
          imgs[i].classList.add('_slide-active');
      }
      previewElem.classList.add('slider__preview__wrap');


// preview event function
      previewElem.addEventListener('click', function(){

          for(let i = 0; i < previewContainer.children.length; i++){

              previewContainer.children[i].classList.remove('_preview-active');
              imgContainer.children[i].classList.remove('_slide-active');

          }
          this.classList.add('_preview-active');
          imgs[this.children[0].dataset.number-1].classList.add('_slide-active');
      });
// --------------------------------------------------------------------------------

      previewArr.push(previewElem);

      let clone = imgs[i].cloneNode(true);
      previewArr[i].appendChild(clone);
      previewContainer.appendChild(previewArr[i])
  }

  //appending to slider
  slider.classList.add('slider');
  slider.appendChild(arrowLeft)
  slider.appendChild(imgContainer)
  slider.appendChild(previewContainer)
  slider.appendChild(arrowRight)

})('#slider', '.slider__slide');