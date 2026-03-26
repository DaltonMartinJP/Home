/* ================================================
 *  DALTONMARTIN — Main Script
 * ================================================ */

// ── News リスト描画（news.js のデータから自動生成） ──
const newsList = document.getElementById('news-list');
if (typeof NEWS_DATA !== 'undefined' && newsList) {
  newsList.innerHTML = [...NEWS_DATA].reverse().map(item =>
    `<li class="news-item"><a href="${item.url}">` +
    `<span class="news-date">${item.date}</span>` +
    `<span class="news-tag">${item.tag}</span>` +
    `<span class="news-title">${item.title}</span>` +
    `</a></li>`
  ).join('');
}

// ── Scroll-triggered fade-in ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// ── Mobile menu toggle ──
const menuBtn = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('active');
  mobileNav.classList.toggle('open');
});

mobileNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    menuBtn.classList.remove('active');
    mobileNav.classList.remove('open');
  });
});
