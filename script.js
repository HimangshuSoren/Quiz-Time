const logo = document.querySelector('.logo')
const startButton = document.querySelector('.start-btn')

setTimeout(()=>{
    document.body.classList.remove('overflow-hide')
},5500)

startButton.addEventListener('click',()=>{
    startButton.classList.add('black-hole')
    setTimeout(()=>{
        document.querySelector('.logo-2').classList.add('black-hole')
    },300)
})
