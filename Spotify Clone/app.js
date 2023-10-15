const openMenu = document.querySelector('.open__menu')
const closeMenu = document.querySelector('.close__menu')
const nav = document.querySelector('.header__enlaces')
const closeAd = document.querySelector('.close__ad')
const ad = document.querySelector('.container__ad')

console.log(openMenu, closeMenu, nav)

openMenu.addEventListener('click', ()=>{
    nav.classList.add("isActive")
})

closeMenu.addEventListener('click', ()=>{
    nav.classList.remove("isActive")
})

closeAd.addEventListener('click', ()=>{
    ad.classList.add('close_ad')
})