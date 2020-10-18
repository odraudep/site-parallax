// header var
let sky = document.querySelector('#sky')
let bmount = document.querySelector('#bmount')
let fmount = document.querySelector('#fmount')
let txt = document.querySelector('#txt')
// myoctocat var
let div_img = document.querySelector('#img')

// efeito scroll
window.addEventListener('scroll', function() {
    let value = window.scrollY 

    sky.style.top = value * 0.15 + 'px'
    bmount.style.bottom = -value * 0.35 + 'px'
    fmount.style.bottom = -value * 0.15 + 'px'
    txt.style.top = value + 'px'
    // section script
    let area = document.querySelector('.area')

    if (value >= 600) {
        area.classList.remove('hide')
        // deixa o octocat img visivel
        setTimeout(function(){
            div_img.style.opacity = 1
        }, 650)
    }
})

// githpic 
let img = document.querySelector('.hover')

img.addEventListener('mouseover', hapart)
img.addEventListener('mouseout', desp)

function hapart() {
    img.classList.add('apar')
    div_img.classList.add('up')
}

function desp() {
    img.classList.remove('apar')
    div_img.classList.remove('up')
}

// octocat pisca
let gitpic = document.querySelector('#gitpic')

setInterval(function() {
    gitpic.src = 'images/gitpic2.png'
    setTimeout(function() {
        gitpic.src = 'images/gitpic.png'
    }, 100) // tempo de olhos fechados
}, 3000)  

// viewport
window.addEventListener('resize', function() {
    let vh = window.innerWidth
    
    console.log(vh)
    console.log(typeof vh)

    if (vh <= 325) {
        alert('[ERRO] Dispositivo muito pequeno')
    }
})

