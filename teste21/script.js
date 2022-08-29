function openMenu() {
    if (menu.style.display == 'none') {
        menu.style.display = 'block'
    } else {
        menu.style.display = 'none'
    }
}

function size(){
    if (window.innerWidth >= 650){
        menu.style.display = 'block'
    } else {
        menu.style.display = 'none'
    }
}