
//Menu pages
const menuBtn = document.getElementById('menuBtn')
const menu = document.getElementById('menu')
const topBurger = document.getElementById('topBurger')
const botBurger = document.getElementById('botBurger')
menuBtn.addEventListener('mouseover', function (e) {
    menu.classList.remove('scale-0')
    menu.classList.add('scale-100')
})
menuBtn.addEventListener('mouseout', function (e) {
    menu.classList.add('scale-0')
    menu.classList.remove('scale-100')
})

menu.addEventListener('mouseover', function (e) {
    menu.classList.remove('scale-0')
    menu.classList.add('scale-100')
    topBurger.classList.add('-rotate-45')
    topBurger.classList.add('-translate-x-[0.35rem]')
    botBurger.classList.add('rotate-45')
    botBurger.classList.add('-translate-x-[0.35rem]')
})
menu.addEventListener('mouseout', function (e) {
    topBurger.classList.remove('-rotate-45')
    topBurger.classList.remove('-translate-x-[0.35rem]')
    botBurger.classList.remove('rotate-45')
    botBurger.classList.remove('-translate-x-[0.35rem]')
    menu.classList.add('scale-0')
    menu.classList.remove('scale-100')
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
    modeTgl.classList.toggle("border-[#3686A0]",)
    modeTgl.classList.toggle("bg-[#3686A0]")
    modeTglCrl.classList.toggle('translate-x-0')
    modeTglCrl.classList.toggle('translate-x-full')
    htmlTag.classList.toggle('dark')
    sunIco.classList.toggle('text-amber-400')
    sunIco.classList.toggle('text-slate-200')
    moonIco.classList.toggle('text-slate-200')
    moonIco.classList.toggle('text-[#3686A0]')
})

//downlaod Function

const inputBtn = document.getElementById('inputBtn')
const downBtn = document.getElementById('downBtn')
const downBtnNotif = document.querySelector('#downBtn div')
let getImg, getName
inputBtn.addEventListener('change',function(e){
    getImg = URL.createObjectURL(e.target.files[0])
    getName = e.target.files[0].name

    downBtnNotif.classList.remove('before:hidden')
    downBtnNotif.classList.remove('after:hidden')
})

downBtn.addEventListener('click', function (e) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    doc.addImage(getImg,10,10)
    doc.save(getName+'.pdf')
    downBtnNotif.classList.add('before:hidden')
    downBtnNotif.classList.add('after:hidden')
})