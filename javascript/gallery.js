document.addEventListener('DOMContentLoaded', function() {
  // Select all gallery items
    const galleryItems = document.querySelectorAll('.gallery-item');
     // Select the photo modal element
    const photoModal = document.querySelector('.photo-modal');
      // Select the modal image element
    const modalImage = document.querySelector('.modal-image');
  
    galleryItems.forEach(function(item) {
      // Add a click event listener to each gallery item
      item.addEventListener('click', function(e) {
        e.preventDefault();
        // Get the source of the clicked image
        const imgSrc = this.querySelector('img').getAttribute('src');
         // Set the source of the modal image to the clicked image source
        modalImage.setAttribute('src', imgSrc);
        // Add the 'active' class to the photo modal to display it
        photoModal.classList.add('active');
      });
    });

  // Add a click event listener to the photo modal to close it
    photoModal.addEventListener('click', function() {
       // Remove the 'active' class from the photo modal to hide it
      this.classList.remove('active');
    });
  });
  
  //Code for the gallery in gallery page