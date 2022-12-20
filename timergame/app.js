const startBtn = document.querySelector('#start')
const timeList = document.querySelector('#time-list')
const screens = document.querySelectorAll('.screen')
const timeEl = document.querySelector('#time')
const board = document.querySelector('#board')
const colors=['#00FF00', '#20B2AA', '#C71585', '#00FFFF', '#00BFFF', '#8B008B', '#9400D3', '#CD5C5C']
let time = 0;
let score = 0;

startBtn.addEventListener('click', (event) => {
    event.preventDefault()
    screens[0].classList.add('up')
})

timeList.addEventListener('click', (event) => {
    if (event.target.classList.contains('time-btn')){
        time = parseInt(event.target.getAttribute('data-time'))
        screens[1].classList.add('up')
        startGame()
    }
})

board.addEventListener('click', (event) => {
    if(event.target.classList.contains('circle')){
        score++
        event.target.remove()
        createRandomCircle()
    }
})

// startGame()

function startGame () {
    setInterval(decreaseTime, 1000)
    createRandomCircle()
    setTime(time)
}

function decreaseTime(){
    if (time === 0) {
        finishGame()
    } else {
        let current = --time
        if(current < 10){
            current = `0${current}`
        }
        setTime(current)
    }
}

function setTime(value){
    timeEl.innerHTML = `00:${value}`
}

function finishGame(){
    timeEl.parentNode.classList.add('hide')
    board.innerHTML = `<h1>Cчет: <span class="primary">${score}</span></h1`
}

function createRandomCircle() {
    const circle = document.createElement('div')
    const size = getRandomNumber(10, 60)
    const {width, height} = board.getBoundingClientRect()
    const x = getRandomNumber(0, width-size)
    const y = getRandomNumber(0, height - size)

    circle.classList.add('circle')
    setColor(circle)
    circle.style.width = `${size}px`
    circle.style.height = `${size}px`
    circle.style.top = `${y}px`
    circle.style.left = `${x}px`

    board.append(circle)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color
}

function getRandomColor(){

    //для списка цветов
    // const index = Math.floor(Math.random() * colors.length)
    // return colors[index]

    // все цвета
    let r = getRandomNumber(0, 255);
    let g = getRandomNumber(0, 255);
    let b = getRandomNumber(0, 255);
    const col = `rgb(${r}, ${g}, ${b})`
    return col

}

function getRandomNumber(min, max){
    return Math.round(Math.random() * (max - min) + min)
}