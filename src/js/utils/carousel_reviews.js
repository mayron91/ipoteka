$(window).on('load', function(){

    // Carousel Slider reviews//
    
    let elemWidth = ( 100 * parseFloat($('.listBox li').css('width')) / parseFloat($('.containerBox').parent().css('width')) ); // Width of each element
    let elemPerPage = parseInt((100 / elemWidth)); // Elements per page 
    
    let marginLeft = 0;
    let count = 0;
    
    let totalElem = $('.listBox li').length; // Number of total elements
    let numSlides = Math.ceil(totalElem / elemPerPage); // Number of slides
    
    if ( totalElem > elemPerPage ) {
    
      $('.arrow.back').on('click', function(){ // Go back
    
        if ( marginLeft < 0 ) {
    
          count--;
          marginLeft = marginLeft + 100;
    
          $('ul.listBox').animate({
            marginLeft: marginLeft + "%"
          }, 1500);
    
        }
    
      });
    
      $('.arrow.forward').on('click', function(){ // Go forward
    
        count++;
    
        if ( count < numSlides ) {
    
          if ( marginLeft <= 0 ) {
    
            marginLeft = marginLeft - 100;
    
            $('ul.listBox').animate({
              marginLeft: marginLeft + "%"
            }, 1500);
    
          }
    
        } else {
    
          count--;
    
        }
    
      });
    
    }
    
    })