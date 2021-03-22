const clockBox = document.querySelector('h1')

function clock() {
    const date = new Date()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()
    clockBox.innerText = `${hours} : ${minutes} : ${seconds}`
}

clock()
setInterval(clock, 1000)