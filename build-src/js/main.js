/**
 * JQUERY ON READY START
 */
$(function() {
  
  // Toggle mobile menu
  $('#js-toggle-main-nav').click(function(event) {
    event.preventDefault();
    $('#js-main-nav').toggleClass('js-show-nav');
    $(this).toggleClass('js-nav-is-open');
  });  
  
  // SLIDERS
  // Home slider
  var homeSlider = $('#large-slider--home');
  if( homeSlider.length ) {
    homeSlider.bxSlider({
      controls: false,
      auto: true,
      pager: true, // temp
    });
  }

});
/**
 * END JQUERY ON READY
 */

/**
 * FUNCTIONS
 */

