let object = {
    number: 1,
    status: 'new',
    true: true,
    price: 5,
    id: 2,
}

//1) вернуть сумму всех числовых полей переданного объекта
function sumOfNums(obj) {
    let sum = 0;

    for (let key in obj) {
        if (typeof obj[key] === "number") {  //если тип значения по ключу - число
            sum += obj[key];   //прибавить это число к сумме
        }
    }

    return sum;
}

let object2 = {
    name: 'Vasya',
    friends: 5,
    likes: 19,
    projects: 7
}

//2) вернуть массив с названиями числовых полей, отсортированными по убыванию значений в них в переданном объекте
function sortPropsNames(obj) {
    let numsPropsArray = [];

    for (let key in obj) {
        if (typeof obj[key] === "number") {
            numsPropsArray.push(key)
        }
    }

    numsPropsArray.sort(
        function (a, b) {  //сравниваются элементы массива
            if (obj[a] > obj[b]) {   //в объекте по ключу, равному значению элемента массива (строка), лежит значение (число), их можно сравнить
                return -1;
            }
            if (obj[a] < obj[b]) {
                return 1;
            }
        })

    return numsPropsArray;
}


