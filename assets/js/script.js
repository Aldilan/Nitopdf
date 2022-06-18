//Config and Menu pages

const configBtn = document.getElementById('configBtn')
const configBtnIco = configBtn.getElementsByTagName('i')[0]
const config = document.getElementById('config')
configBtn.addEventListener('mouseover', function (e) {
    config.classList.remove('hidden')
})
configBtn.addEventListener('mouseout', function (e) {
    config.classList.add('hidden')
})

config.addEventListener('mouseover', function (e) {
    config.classList.remove('hidden')
    configBtnIco.classList.add('rotate-45')
})
config.addEventListener('mouseout', function (e) {
    config.classList.add('hidden')
    configBtnIco.classList.remove('rotate-45')
})

const menuBtn = document.getElementById('menuBtn')
const menu = document.getElementById('menu')
menuBtn.addEventListener('mouseover', function (e) {
    menu.classList.remove('hidden')
})
menuBtn.addEventListener('mouseout', function (e) {
    menu.classList.add('hidden')
})

menu.addEventListener('mouseover', function (e) {
    menu.classList.remove('hidden')
})
menu.addEventListener('mouseout', function (e) {
    menu.classList.add('hidden')
})


//Dark mode
const modeTgl = document.getElementById('modeTgl')
const modeTglCrl = document.getElementById('modeTglCrl')
const htmlTag = document.querySelector('html')

modeTgl.addEventListener('click', function (e) {
    modeTglCrl.classList.toggle('left-0')
    modeTglCrl.classList.toggle('right-0')
    htmlTag.classList.toggle('dark')
})
