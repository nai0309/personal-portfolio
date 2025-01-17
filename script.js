// Navbar JS
function toggleMenu() {
  var menuToggle = document.querySelector('.toggle');
  var menu = document.querySelector('.menu');
  menuToggle.classList.toggle('active')
  menu.classList.toggle('active')
}

function scrollToTop() {
  var menuToggle = document.querySelector('.toggle')
  var menu = document.querySelector('.menu')
  if (menu.classList.contains('active')) {
    menu.classList.remove('active');
    menuToggle.classList.remove('active');
  }
}

// Scroll Animation
const sr = ScrollReveal({
  origin: 'top',
  distance: '85px',
  duration: 2000,
  reset: true
})

sr.reveal('.home-text', { delay: 200 })
sr.reveal('.home-image', { delay: 250 })
sr.reveal('.social', { delay: 200 })
// sr.reveal('.heading-experience', { delay: 200 })
// sr.reveal('.experience-text', { delay: 300 })
// sr.reveal('.experience-image', { delay: 300 })
// sr.reveal('.experience-portfolio', { delay: 400 })
// sr.reveal('.heading-sr-reviews', { delay:200 })
<<<<<<< HEAD
// // sr.reveal('.content-sr-reviews', { delay:200 })
=======
// sr.reveal('.content-sr-reviews', { delay:200 })
>>>>>>> d8e7ea0a6ef3396c6bc0f458ebcc15c40fb34719
// sr.reveal('.heading-sr-skill', { delay: 200 })
// sr.reveal('.content-sr-skill', { delay: 200 })
// sr.reveal('.heading-sr-ins', {})
// sr.reveal('.content-sr-ins', { delay: 200 })
// sr.reveal('.heading-sr-presentation', {})
// sr.reveal('.content-sr-presentation', { delay: 200 })
// sr.reveal('.heading-sr-poster', {})
// sr.reveal('.content-sr-poster', { delay: 200 })
// sr.reveal('.heading-sr-digitalArt', {})
// sr.reveal('.content-sr-digitalArt', { delay: 200 })

function showFullScreenImage(imageSrc) {
  var popup = document.createElement('div');
  popup.className = 'fullscreen-popup';

  var image = document.createElement('img');
  image.src = imageSrc;

  var closeBtn = document.createElement('span');
  closeBtn.className = 'close-btn';
  closeBtn.innerHTML = '&times;';
  closeBtn.onclick = function () {
    document.body.removeChild(popup);
  };

  popup.appendChild(image);
  popup.appendChild(closeBtn);

  document.body.appendChild(popup);
}

function loadPage(page) {
  var dataElement = document.getElementById('data');

  // 使用 AJAX 載入頁面內容
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      dataElement.innerHTML = xhr.responseText;
    }
  };
  xhr.open('GET', page, true);
  xhr.send();
}

// document.addEventListener('DOMContentLoaded', () => {
//   const reviewsContainer = document.querySelector('.reviews-container');

//   // 手機觸控控制動畫暫停
//   reviewsContainer.addEventListener('touchstart', () => {
//       reviewsContainer.classList.add('paused');
//   });

//   reviewsContainer.addEventListener('touchend', () => {
//       reviewsContainer.classList.remove('paused');
//   });
  
//   reviewsContainer.addEventListener('touchcancel', () => {
//     reviewsContainer.classList.remove('paused');
// });

//   reviewsContainer.addEventListener('touchend', () => {
//     setTimeout(() => {
//         reviewsContainer.classList.remove('paused');
//     }, 50); // 加入延遲，避免競態條件
//   });

// });

document.addEventListener('DOMContentLoaded', () => {
  const reviewsWrapper = document.querySelector('.reviews-wrapper');
  const reviewsContainer = document.querySelector('.reviews-container');

  let isTouching = false; // 是否正在觸控
  let startX = 0;         // 起始觸控位置
  let currentX = 0;       // 當前觸控位置
  let translateX = 0;     // 容器平移位置
  let animationPaused = false; // 動畫是否暫停

  // 觸摸開始
  reviewsWrapper.addEventListener('touchstart', (e) => {
    isTouching = true;
    startX = e.touches[0].clientX;
    reviewsContainer.classList.add('paused'); // 暫停動畫
    animationPaused = true;
  });

  // 觸摸移動
  reviewsWrapper.addEventListener('touchmove', (e) => {
    if (!isTouching) return;

    currentX = e.touches[0].clientX;
    const deltaX = currentX - startX;

    // 更新平移位置
    reviewsContainer.style.transform = `translateX(${translateX + deltaX}px)`;
  });

  // 觸摸結束
  reviewsWrapper.addEventListener('touchend', (e) => {
    if (!isTouching) return;

    const deltaX = currentX - startX;
    translateX += deltaX; // 更新平移總量

    // 限制滑動範圍，避免內容超出左右邊界
    const maxTranslate = -(reviewsContainer.scrollWidth - reviewsWrapper.offsetWidth);
    if (translateX > 0) translateX = 0; // 限制左側
    if (translateX < maxTranslate) translateX = maxTranslate; // 限制右側

    reviewsContainer.style.transform = `translateX(${translateX}px)`;
    isTouching = false;

    // 恢復動畫
    setTimeout(() => {
      reviewsContainer.classList.remove('paused');
      animationPaused = false;
    }, 300); // 給用戶手動操作的緩衝時間
  });
<<<<<<< HEAD

  reviewsContainer.addEventListener('touchcancel', () => {
    reviewsContainer.classList.remove('paused');
=======
>>>>>>> d8e7ea0a6ef3396c6bc0f458ebcc15c40fb34719
});


