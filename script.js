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

sr.reveal('.home-text', {})
sr.reveal('.home-image', { delay: 200 })
sr.reveal('.social', { delay: 200 })
sr.reveal('.experience-text', {})
sr.reveal('.experience-image', { delay: 200 })
sr.reveal('.experience-portfolio', { delay: 200 })
sr.reveal('.heading', {})
sr.reveal('.portfolio-content', {delay: 200})

function showFullScreenImage(imageSrc) {
  var popup = document.createElement('div');
  popup.className = 'fullscreen-popup';

  var image = document.createElement('img');
  image.src = imageSrc;

  var closeBtn = document.createElement('span');
  closeBtn.className = 'close-btn';
  closeBtn.innerHTML = '&times;';
  closeBtn.onclick = function() {
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
