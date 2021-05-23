const hamEle = document.getElementById('ham')
// const menuCloseEle = document.getElementById('menu-close')

hamEle.addEventListener('click', () => {
    document.querySelector('ul.menu').classList.toggle('active')
})

// menuCloseEle.addEventListener('click', () => {
//     document.querySelector('ul.menu').classList.toggle('active')
// })