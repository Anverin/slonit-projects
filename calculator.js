//Простой калькулятор, выполняющий нужную операцию из четырех стандартных: */+-.


//счетные функции: принимают два числа, выполняют одно действие
const calculateAddition = function (num1, num2) {
    return num1 + num2;
}

const calculateSubtraction = function (num1, num2) {
    return num1 - num2;
}

const calculateMultiplication = function (num1, num2) {
    return num1 * num2;
}

const calculateDivision = function (num1, num2) {
    return num1 / num2;
}

//объект, хранящий эти функции по ключам
const operations = {
    add: calculateAddition,
    subtract: calculateSubtraction,
    multiply: calculateMultiplication,
    divide: calculateDivision
}

//калькулятор, принимающий два числа и требуемое действие (= считающая функция) и вызывающий эту функцию с этими числами
function simpleCalculate(num1, num2, operation) {
    return operation(num1, num2);
}

let selectedOperation = "multiply";
console.log(simpleCalculate(6, 3, operations[selectedOperation])); // 18

//при вызове калькулятора передаются два числа и обращение к значению свойства объекта с операциями (функции) по его ключу в переменной (строке)