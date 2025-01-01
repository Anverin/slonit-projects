let numbersArray = [1, 2, 3, 4, 5];
let lettersArray = ['a', 'b', 'c', 'd', 'e'];

function mySlice(arr, start, end) {
    let newArray = [];  //создать новый массив внутри функции, чтобы он заново создавался при ее вызове

    if (start < 0) {
        start = start + arr.length   //если передано отрицательное число, отсчет будет с конца массива (аналогично стандартному методу)
        if (start < 0) {  //если число все еще отрицательное, сделать его 0
            start = 0;
        }
    }

    if (end < 0) {
        end = end + arr.length
    }

    for (let i = start; i < end && i < arr.length; i++) {   //взять элементы в пределах переданных индексов (при переданном окончании интервала больше длины массива цикл прекратится на последнем элементе)
            newArray.push(arr[i])   //запушить элементы переданного в новый массив
    }

    return newArray;
}



function myIndexOf(arr, item, from = 0) {  //по умолчанию from = 0, поиск будет с начала массива
    if (from < 0) {
        from = from + arr.length;
        if (from < 0) {
            from = 0;
        }
    }

    for (let i = from; i < arr.length; i++) {  //от переданного индекса и до конца массива
        if (arr[i] === item) {        //элементы проверяются на сходство с переданным элементом
            // return ( `Индекс элемента "${item}" = ${i}`);
            return i;   //возвращается индекс равного переданному элементу
        }
    }

    // return ( `Элемент "${item}" не найден`);
    return -1;
}




function myIncludes(arr, item, from = 0) {
    if (from < 0) {
        from = from + arr.length;
        if (from < 0) {
            from = 0;
        }
    }

    for (let i = from; i < arr.length; i++) {
        if (arr[i] === item) {
            return true;
        }
    }

    return false;
}