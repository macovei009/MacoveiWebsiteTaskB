const photo = document.querySelector('.photo');

photo.addEventListener('mouseenter', () => {
  photo.classList.add('filter-effect');
});

photo.addEventListener('mouseleave', () => {
  photo.classList.remove('filter-effect');
});

//code to apply and remove a css class (the black and white filter efect) when the mouse is over the photo