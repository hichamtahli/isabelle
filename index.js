// Quand la page a fini de charge.
$(document).ready(function() {

  if ($(window).width() <= 768) {
    $('nav').addClass('fixed');
    //$('nav').css('margin-top', '0px')
  } else {
  
    // Quand on déroule la page.
    $(window).scroll(function () {
        // Si on atteint 300px et plus on ajoute la class fixed au nav.
        if ($(window).scrollTop() > 330) {
          $('nav').addClass('fixed');
        }
        
        // Si on atteint 300px et moins on enleve la class fixed au nav.
        if ($(window).scrollTop() < 331) {
          $('nav').removeClass('fixed');
        }
      });
  }
});