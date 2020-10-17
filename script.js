// header script
let sky = document.querySelector('#sky')
let bmount = document.querySelector('#bmount')
let fmount = document.querySelector('#fmount')
let txt = document.querySelector('#txt')


window.addEventListener('scroll', function() {
    let value = window.scrollY 
    console.log(value) 

    sky.style.top = value * 0.15 + 'px'
    bmount.style.bottom = -value * 0.35 + 'px'
    fmount.style.bottom = -value * 0.15 + 'px'
    txt.style.top = value + 'px'

    // section script
    let area = document.querySelector('.area')

    if (value >= 600) {
        area.classList.remove('hide')
    }
})

