const logo = document.querySelector('.logo')
const question = document.querySelector('.question')
const startButton = document.querySelector('.start-btn')

document.querySelector('.main-game').classList.add('display-none')

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
        document.querySelector('.main-game').classList.remove('display-none')
        document.querySelector('.start-game').classList.add('display-none')
    },800)
    setTimeout(()=>{
        document.querySelector('#logo-in-game').classList.add('pop-animation-logo-in-game')
    },1700)
    setTimeout(()=>{
        document.querySelector('.container-1').classList.add('pop-animation-logo-in-game')
    },2300)
    document.querySelector('.container-1').classList.add('dis-block')
    setTimeout(()=>{
        question.innerText = "Who is the Vice President of Turkmenistan?"
    },2800)


})


//---->[Dancing Logo]
const dance = setInterval(()=>{
        document.querySelector('.l-2-container').classList.toggle('left-side')
},400)