$(document).ready(function() {
    $('body').css({ "display" : "block" });
    $('.fadeinup-animate').css({ "opacity" : "0" });
    $('.fadeinright-animate').css({ "opacity" : "0" });

  //fadeinup animation
  $('.fadeinup-animate').waypoint(function() {
    $(this.element).addClass('fadeinup');
     }, { offset: '100%'});
  
  $('.fadeinright-animate').waypoint(function() {
    $(this.element).addClass('fadeinright');
     }, { offset: '100%'});
  
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