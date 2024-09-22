const logo = document.querySelector('.logo')
const startButton = document.querySelector('.start-btn')

setTimeout(()=>{
    document.body.classList.remove('overflow-hide')
},5500)


//---->[Start Button Event Listener]
startButton.addEventListener('click',()=>{
    startButton.classList.add('black-hole')
    setTimeout(()=>{
        document.querySelector('.logo-2').classList.add('black-hole')
        clearInterval(dance)
    },400)
    setTimeout(()=>{

        document.querySelector('.main-game').classList.add('start')
    },800)
    setTimeout(()=>{
        document.querySelector('#logo-in-game').classList.add('pop-animation-logo-in-game')
    },1700)


})


//---->[Dancing Logo]
const dance = setInterval(()=>{
        document.querySelector('.l-2-container').classList.toggle('left-side')
},400)