// 1

function numberMin(number1 = Number(prompt('Введите первое число')), number2 = Number(prompt('Введите второе число'))) {
    console.log(Math.min(number1, number2))
}
numberMin()

//2

function stringLength (string = prompt('Введите строку')) {
    console.log(string.length)
}
stringLength()

//3

function calculator (num1 = Number(prompt('Введите перове число')), operator = prompt('Выберите + - * /'), num2 = Number(prompt('Введите второе число'))) {
    if (operator === '/' && num2 === 0) {
        console.log('На ноль делить нельзя')
    }else if(operator === '+')
    {
        console.log(num1 + num2)
    }else if(operator === '-') {
        console.log(num1 - num2)
    }else if (operator === '*') {
        console.log(num1 * num2)
    }else if (operator === '/') {
        console.log(num1 / num2)
    }else {
        console.log('Введите нормальное число')
    }
}
calculator()