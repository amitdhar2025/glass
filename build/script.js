// Disable Bootstrap collapse animation to make hamburger menu toggle faster
document.addEventListener('DOMContentLoaded', function () {
  var mainNav = document.getElementById('mainNav');
  if (mainNav) {
    // Remove collapse transition class to disable animation
    mainNav.classList.remove('collapsing');
    mainNav.style.transition = 'none';

    // Override Bootstrap collapse events to remove animation delay
    $('#mainNav').on('show.bs.collapse', function () {
      $(this).css('transition', 'none');
    });
    $('#mainNav').on('hide.bs.collapse', function () {
      $(this).css('transition', 'none');
    });
  }

  // Initialize Bootstrap carousel for masterSliderCarousel
  $('#masterSliderCarousel').carousel({
    interval: 3000,
    pause: 'hover'
  });
});
