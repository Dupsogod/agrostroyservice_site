$(document).ready(function () {
  $('.owl-carousel').owlCarousel();
});

var owl = $('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: false,
      dotsEach: false,
      dots: false,
      margin: 25,
      autoHeight:true
    },
    1200: {
      items: 3,
      nav: true,
      loop: true,
      dotsEach: false,
      dots: false,
      margin: 25,
      nav: false 
    }
  }
})

owl.owlCarousel();
$('.next').click(function () {
  owl.trigger('next.owl.carousel');
});
$('.prev').click(function () {
  owl.trigger('prev.owl.carousel', [300]);
});