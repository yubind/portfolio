$(document).ready(function() {
   //scroll animation 
  $('a[href^="#"]').on('click', function(e) {
    var target = $(this.getAttribute('href'));
    
    if( target.length ) {
        e.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
  });
    
   
   //highlight nav
   $(window).scroll(function() {
    var position  = window.pageYOffset;

    $('.section').each(function() {
      var target = $(this).offset().top;
      var id = $(this).attr('id');
      var navLinks = $('.nav-link');
      var navHeight = $('.nav').height();
      
      if(position >= target - navHeight) {
        navLinks.removeClass('current');
        $('.nav .nav-item a[href="#' + id + '"]').addClass('current');
      }
    });
   });
});