// Highlight the active navigation item
const navigationItems = document.querySelectorAll('.navigation li');
navigationItems.forEach(item => {
  item.addEventListener('click', () => {
    navigationItems.forEach(item => item.classList.remove('active'));
    item.classList.add('active');
  });
});
