const hamEle = document.getElementById('ham')
const yrEle = document.getElementById('yr')

hamEle.addEventListener('click', () => {
    document.querySelector('ul.menu').classList.toggle('active')
})

yrEle.innerText = new Date().getFullYear()
