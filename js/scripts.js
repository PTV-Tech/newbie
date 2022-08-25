$(document).ready(function() {

  //Scroll animation  
  AOS.init({offset:0, duration:1000, delay:200});

  //Scrollbar
  $(".scrollbar").mCustomScrollbar();

  //Sidebar
  $('.action').click(function(){
    $('.sidebar').toggleClass('show');
  });

  //Close youtube
  $('.modal-video').on('hidden.bs.modal', function (e) {
    var $this = $(this).find('video'),
            tempSrc = $this.attr('src');
    $this.attr('src', "");
    $this.attr('src', tempSrc);
  });

  //Slider 
  if ( $( ".mySwiper" ).length ){
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 2,
      spaceBetween: 50,
      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 50,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 50,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 50,
        },
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }

  //Button hide
  $('.btn-toogle').click(function(){
    $(this).parent().toggleClass('show');
    $(this).parent().parent().find('.content').toggleClass('show');
  })

  $('.bars').click(function(){
    $('.navigation').toggleClass('toggle');
  });
  $('.navigation ul li').click(function(){
    $(this).find('ul').toggleClass('d-block');
  });

  //Close youtube
  $('.modal-video').on('hidden.bs.modal', function (e) {
    var $this = $(this).find('iframe'),
            tempSrc = $this.attr('src');
    $this.attr('src', "");
    $this.attr('src', tempSrc);
  });
  
});