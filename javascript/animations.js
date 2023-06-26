document.addEventListener('DOMContentLoaded', () => {
    const bannerSection = document.getElementById('bannerSection');
    bannerSection.style.opacity = '0';
    bannerSection.style.transform = 'translateX(-100%)';
  
    setTimeout(() => {
      bannerSection.style.transition = 'opacity 1s ease, transform 1s ease';
      bannerSection.style.opacity = '1';
      bannerSection.style.transform = 'translateX(0)';
    }, 500);
  });
  
  //This is the animation code for the bannerSection to gradually fading it in and sliding it into view from the left side of the screen.