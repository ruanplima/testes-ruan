const btnOpen = document.querySelector('.btn-menu-open')
const btnClose = document.querySelector('.btn-menu-close')
const men = document.querySelector('.menu')

btnOpen.addEventListener('click' , function(){
    men.classList.add('menu-open')
})

btnClose.addEventListener('click' , function(){
    men.classList.remove('menu-open')
})