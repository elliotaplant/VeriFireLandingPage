(function($) {
  "use strict"; // Start of use strict

  try {
    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 48)
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
      $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({target: '#mainNav', offset: 54});

    // Collapse Navbar
    var navbarCollapse = function() {
      if ($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("navbar-shrink");
      } else {
        $("#mainNav").removeClass("navbar-shrink");
      }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
  } catch (e) {
    console.log('jQuery failed to load');
  }

})(jQuery); // End of use strict

// Should add form submission redirect

$("#signup-form").submit(function(e) {
  e.preventDefault();
  var $form = $(this);
  console.log($form.serialize());

  $
    .post($form.attr("action"), $form.serialize())
    .then(function() {
      window.location.pathname = 'stillbuilding.html';
    })
    .catch(function(error) {
      window.location.pathname = 'stillbuilding.html';
    });
});
