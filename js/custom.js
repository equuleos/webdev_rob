
  (function ($) {
  
  "use strict";

    // MENU
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });
    
    // CUSTOM LINK
    $('.smoothscroll').click(function(){
      var el = $(this).attr('href');
      var elWrapped = $(el);
      var header_height = $('.navbar').height();
  
      scrollToDiv(elWrapped,header_height);
      return false;
  
      function scrollToDiv(element,navheight){
        var offset = element.offset();
        var offsetTop = offset.top;
        var totalScroll = offsetTop-navheight;
  
        $('body,html').animate({
        scrollTop: totalScroll
        }, 300);
      }
    });
  
  })(window.jQuery);


//sliders
document.addEventListener("DOMContentLoaded", function () {
  showSlides("seoSlider");
  showSlides("wordpressSlider");
  showSlides("shopifySlider");
});

function showSlides(sliderId) {
  let currentSlide = 0;
  let slides = document.getElementById(sliderId).getElementsByClassName("mySlides");

  function displaySlide() {
      for (let i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].style.display = "block";
      setTimeout(displaySlide, 2000); // Adjust the time interval as needed
  }

  displaySlide();
}

