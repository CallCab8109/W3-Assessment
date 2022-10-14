// const randomElement = array[Math.floor(Math.random() * array.length)]

const foodGen = document.querySelector('#foodGen')

const food = ['Subway', 'Taco Bell', 'Sur Cafe', 'McDonalds']
function food1 () {
    const random = Math.floor(Math.random() * food.length)
    alert(food[random])
}

// food1()
foodGen.addEventListener('click', food1)