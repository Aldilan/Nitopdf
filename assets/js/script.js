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
const sunIco = document.getElementById('sun')
const moonIco = document.getElementById('moon')

modeTgl.addEventListener('click', function (e) {
    modeTgl.classList.toggle("border-amber-400",)
    modeTgl.classList.toggle("bg-amber-400")
    modeTgl.classList.toggle("border-slate-200",)
    modeTgl.classList.toggle("bg-slate-200")
    modeTglCrl.classList.toggle('left-0')
    modeTglCrl.classList.toggle('right-0')
    htmlTag.classList.toggle('dark')
    sunIco.classList.toggle('text-amber-400')
    sunIco.classList.toggle('text-white')
    moonIco.classList.toggle('text-white')
    moonIco.classList.toggle('text-slate-200')
})

//downlaod Function

const inputBtn = document.getElementById('inputBtn')
const downBtn = document.getElementById('downBtn')
const downBtnNotif = document.querySelector('#downBtn div')
let getImg
inputBtn.addEventListener('change',function(e){
    getImg = URL.createObjectURL(e.target.files[0])
    console.log(e.target.files[0].type)

    downBtnNotif.classList.remove('before:hidden')
    downBtnNotif.classList.remove('after:hidden')
})

downBtn.addEventListener('click', function (e) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    doc.addImage(getImg,10,10)
    doc.save('od.pdf')
    downBtnNotif.classList.add('before:hidden')
    downBtnNotif.classList.add('after:hidden')
})