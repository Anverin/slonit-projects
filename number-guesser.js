let hiddenNumber = 0;  //переменная для хранения загаданного числа

function comp1(proposedNumber, newGame) {

    if (newGame) {
        hiddenNumber = Math.round(Math.random() * 100);  //загаданное число - рандомное от 1 до 100
    }

    if (proposedNumber > hiddenNumber) {    //сравнить переданное число с загаданным
        console.log('Компьютер 1: Меньше.');
        return '<';
    } else if (proposedNumber < hiddenNumber) {
        console.log('Компьютер 1: Больше.');
        return '>';
    } else if (proposedNumber === hiddenNumber) {
        console.log('Компьютер 1: Угадал!');
        return 'угадал';
    }
}

let first;  //переменные для хранения границ интервала
let last;

function comp2(answer) {

    if (!answer) {  //если comp2() вызвана без аргумента (в начале новой игры), сбросить интервал до 1-100
        first = 1;
        last = 100;
    }

    function searchMiddle() {         //поиск середины интервала вне зависимости, каков он
        return Math.floor((first + last) / 2);
    }

    if (answer) {    //если comp2() вызвана с аргументом (ответом от comp1())
        if (answer === '>') {
            first = searchMiddle();   //начало интервала сдвигается до бывшей середины
        } else if (answer === '<') {
            last = searchMiddle();    //конец интервала сдвигается до бывшей середины
        }
    }

    console.log('Компьютер 2: Пробую число ' + searchMiddle());  //найденная новая середина интервала
    return searchMiddle();  //ответ 2 компьютера, передаваемый первому
}


function game() {
    let comp1Answer = comp1(comp2(), true);  //в начале игры comp1 вызывается с результатом "пустого" вызова comp2 (это будет число 50, т.к. интервал вначале - 1-100) + командой изменить hiddenNumber [на новый]

    while (comp1Answer !== 'угадал') {  //цикл будет продолжаться до правильного ответа
        let newTryNumber = comp2(comp1Answer);  //каждый раз предлагаемое число будет результатом вызова comp2 с аргументом > или <, что будет сокращать интервал
        comp1Answer = comp1(newTryNumber, false); //будет вызываться comp1 с новым числом + командой пока не менять загаданное число
    }
}
