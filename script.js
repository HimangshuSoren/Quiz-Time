import QQ from "./questions.js"

const logo = document.querySelector('.logo')
const question = document.querySelector('.question')
const startButton = document.querySelector('.start-btn')
var tim
document.querySelector('.main-game').classList.add('display-none')

setTimeout(() => {
    document.body.classList.remove('overflow-hide')
}, 5500)


//---->[Start Button Event Listener]
startButton.addEventListener('click', () => {
    startButton.classList.add('black-hole')
    setTimeout(() => {
        document.querySelector('.logo-2').classList.add('black-hole')
        clearInterval(dance)
    }, 400)
    setTimeout(() => {

        document.querySelector('.main-game').classList.add('start')
        document.querySelector('.main-game').classList.remove('display-none')
        document.querySelector('.start-game').classList.add('display-none')
    }, 800)
    setTimeout(() => {
        document.querySelector('#logo-in-game').classList.add('pop-animation-logo-in-game')
    }, 1500)
    setTimeout(() => {
        document.querySelector('.container-1').classList.add('pop-animation-logo-in-game')
    }, 2300)
    document.querySelector('.container-1').classList.add('dis-block')
    // setTimeout(() => {
    //     // question.innerText = "Who is the Vice President of Turkmenistan?"
    // }, 2800)

    setTimeout(() => {
        document.querySelector('.Q-no').classList.add('pop-animation-logo-in-game')
    }, 1900)
    setTimeout(() => {
        document.querySelector('.timer-container').classList.add('pop-animation-logo-in-game')
    }, 2000)
    setTimeout(() => {
        document.querySelector('.container-2').classList.add('pop-animation-logo-in-game')
    }, 2700)


    let inc = 50
    tim = setInterval(() => {
        if (inc < 10) {
            document.querySelector(".timer").innerHTML = `0${inc}/50`
        }
        else {
            document.querySelector(".timer").innerHTML = `${inc}/50`
        }
        inc--
        if (inc == -1) {
            clearInterval(tim)
        }
    }, 1000)

})


//---->[Dancing Logo]
const dance = setInterval(() => {
    document.querySelector('.l-2-container').classList.toggle('left-side')
}, 400)

let RNumber = Math.floor(Math.random()*25+1)
console.log(RNumber)
let  option = document.querySelectorAll('.options') 
let  option1 = document.querySelector('.option-1') 
let  option2 = document.querySelector('.option-2') 
let  option3 = document.querySelector('.option-3') 
let  option4 = document.querySelector('.option-4') 

question.innerHTML = QQ[RNumber].question
option3.innerHTML = QQ[RNumber].options[2]
option1.innerHTML = QQ[RNumber].options[0]
option2.innerHTML = QQ[RNumber].options[1]
option4.innerHTML = QQ[RNumber].options[3]

option.forEach(element => {
    element.addEventListener('click',(e)=>{

        if( e.target.innerHTML == QQ[RNumber].correctAnswer){
         e.target.style= `background-color:var(--Green); color:white; border-color:green;`
        }
        else if(e.target.innerHTML != QQ[RNumber].correctAnswer){
         e.target.style = `background-color:red; color:white ; border-color:rgb(195, 0, 0)`
        }
        option.forEach(op=>{
            if(op.innerHTML == QQ[RNumber].correctAnswer){
                op.style= `background-color:var(--Green); color:white; border-color:green;`
            }
        })
        clearInterval(tim)
        
     })
    
})



