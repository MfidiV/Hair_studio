let targetRate = 1;

window.addEventListener('scroll', () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop < lastScrollTop) {
    targetRate = 0.5;
  } else {
    targetRate = 1;
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// Animate playbackRate to targetRate smoothly
function smoothPlaybackRate() {
  if (Math.abs(video.playbackRate - targetRate) > 0.01) {
    video.playbackRate += (targetRate - video.playbackRate) * 0.1;
  }
  requestAnimationFrame(smoothPlaybackRate);
}

smoothPlaybackRate();

document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper(".gallerySwiper", {
    loop: true,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});

const reviewsContainer = document.getElementById('reviewsSlider');
const totalCards = reviewsContainer.children.length;
const cardsToShow = 2; // Number of cards visible at once
let currentIndex = 0;

function autoSlide() {
  currentIndex++;
  if (currentIndex > totalCards - cardsToShow) {
    currentIndex = 0; // Loop back to start
  }
  const translateX = -(currentIndex * (reviewsContainer.children[0].offsetWidth + 16)); // 16px gap approx.
  reviewsContainer.style.transform = `translateX(${translateX}px)`;
}

// Auto slide every 3 seconds
setInterval(autoSlide, 3000);
