const nav = document.querySelectorAll('.nav');

nav.forEach(n => {
  n.addEventListener('click', toggleNav)
})

function toggleNav() {
  nav.forEach(n => {
    n.classList.remove('active');
    this.classList.add('active');
  })
}