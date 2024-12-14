const p = document.querySelector('p');
const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');

let count = 0;

const increment = () => {
    count++
    p.innerHTML = count
    p.style.color = 'green'
}
const decrement = () => {
    if(count > 0){
        count--
        p.innerHTML = count
        p.style.color = 'red'
    }

}

plus.onclick = () => increment()
minus.onclick = () => decrement()


const coordinate = document.querySelector('.coordinate')

coordinate.onmousemove = (event) => {
    const x = event.offsetX
    const y = event.offsetY
    coordinate.innerHTML = `X:${x} Y: ${y}`
}

const redLight = document.querySelector('#redLight')
const yellowLight = document.querySelector('#yellowLight')
const greenLight = document.querySelector('#greenLight')

const trafficLight = (value = prompt('Выберите цвет красный желтый зеленый').trim().toLowerCase()) => {
    if(value === 'красный') {
        redLight.classList.add('active')
        redLight.innerHTML = 'STOP'
    }else if(value === 'зеленый') {
        greenLight.classList.add('active')
        greenLight.innerHTML = 'GO'
    }else if (value === 'желтый'){
        yellowLight.classList.add('active')
    }
}
trafficLight()
