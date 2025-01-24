let string = 'a dfjvr . gbr k.jvkjuk';

// 1) сделать первую букву строки заглавной
function upFirstLetter(str) {
    if (str) {            //если строка не пустая
        return str[0].toUpperCase() + str.slice(1);
    } else {
        return str;   //иначе вернуть что было без изменений
    }
}

// 2) обрезать строку до заданной длины, не обрывая слова
function cutString(string, symbolsCount) {
    let shortedString = '';
    let pattern = /([^A-Za-zА-ЯЁа-яё0-9][\w\W]+)/ //первый символ - не буква и не цифра, затем - любое количество любых символов

    if (string.length > symbolsCount) { //если строка длиннее заданного, надо резать
        shortedString = string.slice(0, symbolsCount);  //отрезать превышающее длину
        let reversedString = shortedString.split('').reverse().join('');  //перевернуть обрезанную строку
        let stringForTrimBySymbol = reversedString.match(pattern);  //найти часть (с конца), отвечающую регулярке (найти первый с конца символ - не цифру и не букву (пробел или знак препинания)

        if (stringForTrimBySymbol) {
            let trimBySymbolString = stringForTrimBySymbol[0];  //если в строке есть часть, отвечающая регулярке, и был создан массив с помощью match, в 0 элементе - все остальное после этой части (от конца до начала)
            return trimBySymbolString.split('').reverse().join('');  //перевернуть готовую строку обратно

        } else {  //если в строке нечего обрезать по регулярке
            return reversedString.split('').reverse().join('');  //вернуть строку, просто изначально обрезанную, без второго обрезания (только повернутую в правильной последовательности)
        }

    } else {  //если строка короткая и не надо резать
        return string;
    }
}


let string1 = 'a dfjvr . ';
let string2 = 'ffrds';

// 3) содержит ли одна из строк вторую?
function compareString(str1, str2) {
    return !!str1.includes(str2) || !!str2.includes(str1);
}
