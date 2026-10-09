
document.addEventListener('DOMContentLoaded', function () {
  const bar = document.querySelector('.progress');
  const onScroll = () => {
    const doc = document.documentElement;
    const total = doc.scrollHeight - doc.clientHeight;
    const pct = total > 0 ? (doc.scrollTop / total) * 100 : 0;
    if (bar) bar.style.width = pct + '%';
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
});
