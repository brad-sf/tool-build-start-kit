/**
 * JQUERY ON READY START
 */
$(function() {
  
  /**
   * Initiate Functions
   */
  
  // Nav toggle
  bindNavClick();
   
  


});
/**
 * END JQUERY ON READY
 */


/**
 * FUNCTIONS
 */


/**
 * BIND NAV MENU
 */
function bindNavClick() {
  
  $('#js__nav-controller').click(function(event) {
    event.preventDefault();
    
    $('body').toggleClass('nav-is-open');
    
  });
  
}
