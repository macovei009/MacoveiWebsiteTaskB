document.addEventListener('DOMContentLoaded', function() {
    var header = document.querySelector('.header');
    var hamburgerIcon = document.querySelector('.hamburger-icon');
    var navLinks = document.querySelector('.nav-links');

     // Add a fade-in effect to the header after a delay
    setTimeout(function() {
      header.classList.add('fade-in');
    }, 500);

    hamburgerIcon.addEventListener('click', function() {
      hamburgerIcon.classList.toggle('active');
      navLinks.classList.toggle('active');
    });
  });

//code for responsive navigation menu, selecting the header, hamburger icon and navigation links defining event listeners.

