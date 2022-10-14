console.log('hello world')

const color = document.querySelector('#color')
const place = document.querySelector('#place')
const ritual = document.querySelector('#ritual')


function favColor (evt) {
    evt.preventDefault()
    alert('Pink')
}

function favPlace () {
    alert('Outdoors')
}

function favRitual () {
    alert('Bedtime Snack')
}

color.addEventListener('click', favColor)
place.addEventListener('click', favPlace)
ritual.addEventListener('click', favRitual)