const obj = {
    "result": {
        "Brand1": {
            "sum": 284,
            "data": [
                {
                    "date": "2021-09-08",
                    "quantity": 70,
                    "price": 93281
                },
                {
                    "date": "2021-09-09",
                    "quantity": 79,
                    "price": 119153
                },
                {
                    "date": "2021-09-10",
                    "quantity": 48,
                    "price": 66768
                },
                {
                    "date": "2021-09-11",
                    "quantity": 51,
                    "price": 71113
                },
                {
                    "date": "2021-09-12",
                    "quantity": 36,
                    "price": 56294
                },
                {
                    "date": "2021-09-13",
                    "quantity": 0,
                    "price": 0
                }
            ]
        },
        "Brand2": {
            "sum": 481,
            "data": [
                {
                    "date": "2021-09-08",
                    "quantity": 136,
                    "price": 138679
                },
                {
                    "date": "2021-09-09",
                    "quantity": 134,
                    "price": 157216
                },
                {
                    "date": "2021-09-10",
                    "quantity": 101,
                    "price": 124991
                },
                {
                    "date": "2021-09-11",
                    "quantity": 66,
                    "price": 78118
                },
                {
                    "date": "2021-09-12",
                    "quantity": 44,
                    "price": 46562
                },
                {
                    "date": "2021-09-13",
                    "quantity": 0,
                    "price": 0
                }
            ]
        },
        "Brand3": {
            "sum": 218,
            "data": [
                {
                    "date": "2021-09-08",
                    "quantity": 40,
                    "price": 41760
                },
                {
                    "date": "2021-09-09",
                    "quantity": 36,
                    "price": 38720
                },
                {
                    "date": "2021-09-10",
                    "quantity": 34,
                    "price": 34648
                },
                {
                    "date": "2021-09-11",
                    "quantity": 65,
                    "price": 70793
                },
                {
                    "date": "2021-09-12",
                    "quantity": 43,
                    "price": 35368
                },
                {
                    "date": "2021-09-13",
                    "quantity": 0,
                    "price": 0
                }
            ]
        },
        "total": {
            "sum": 983,
            "data": [
                {
                    "date": "2021-09-08",
                    "quantity": 246,
                    "price": 273720
                },
                {
                    "date": "2021-09-09",
                    "quantity": 249,
                    "price": 315089
                },
                {
                    "date": "2021-09-10",
                    "quantity": 183,
                    "price": 226407
                },
                {
                    "date": "2021-09-11",
                    "quantity": 182,
                    "price": 220024
                },
                {
                    "date": "2021-09-12",
                    "quantity": 123,
                    "price": 138224
                },
                {
                    "date": "2021-09-13",
                    "quantity": 0,
                    "price": 0
                }
            ]
        }
    }
}

const arr1 = [];
const arr2 = [];
const arr3 = []
firstData = [];
secondData = [];
// Извлекаем только обьекты брендов без total 
// Складываем их в массив
for (let key in obj.result) {
    if (obj.result[key] !== obj.result.total) {
        arr1.push(obj.result[key])
    }
}
// Пробегаемся по массиву брендов и складываем только ключ data обьекта в массив
arr1.forEach(data => {
    arr2.push(data.data)
})

// Поднимаем елементы на один уровень
const allData = arr2.flat();
// кладем в массив только дату
allData.forEach(obj => {
    arr3.push(obj.date)
})
// оставляем только уникальные значения даты
const arr4 = [...new Set(arr3)];
// начинаем формировать итоговые массивы
arr4.forEach(name => {
    firstData.push({ name })
    secondData.push({ name })
})

firstData.forEach((e, i) => {
    let totalPrice = 0;
    let totalQuantity = 0;
    arr2.forEach((subarr, j) => {
        subarr.forEach(elem => {
            if (firstData[i].name === elem.date) {
                firstData[i]['brand' + (j + 1)] = 'brand' + (j + 1);
                secondData[i]['brand' + (j + 1)] = 'brand' + (j + 1);
                totalPrice += elem.price
                totalQuantity += elem.quantity
                firstData[i].totalPrice = totalPrice
                secondData[i].totalQuantity = totalQuantity
            }
        })
    })
})

// Итого
console.log('test-1', firstData, secondData);
