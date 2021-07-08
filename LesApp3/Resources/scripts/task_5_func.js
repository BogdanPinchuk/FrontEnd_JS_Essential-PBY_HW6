// показ поштових скриньок
function showAllEmails() {
    console.log("Электронные адреса пользователей:")
    users.forEach(user => console.log(user.email));
}

// показ персон з найбільшою кількістю друзів
function showHigestFriendCount() {
    console.log("Пользователи с наибольшим количеством друзей");
    /*
        let max = Number.MIN_VALUE;
    
        users.forEach(user => {
            if (max < user.friends.length)
                max = user.friends.length;
        });
    
        users
            .filter(user => user.friends.length == max)
            .forEach(user => console.log(user.name.first + " " + user.name.last));
    */

    // власна реалізація
    let maxFriend = Math.max(...users.map(i => i.friends.length));
    // відображення
    users
        .filter(i => i.friends.length == maxFriend)
        .forEach(i => console.log(`${i.name.first} ${i.name.last}`));
}

function showMinMaxBalance() {
    /*
    let minBalance = Number.MAX_VALUE;
    let maxBalance = Number.MIN_VALUE;

    users.forEach(user => {
        const currentBalance = +user.balance;
        if (currentBalance > maxBalance)
            maxBalance = currentBalance;
        else if (currentBalance < minBalance) {
            minBalance = currentBalance;
        }
    });
    */

    // власна реалізація
    let array = users.map(i => Number(i.balance));
    // межі балансів
    let maxBalance = Math.max(...array),
        minBalance = Math.min(...array);

    console.log("Компании пользователей с наибольшим балансом:")
    users
        .filter(user => user.balance == maxBalance)
        .forEach(user => console.log(user.company));

    console.log("Компании пользователей с наименьшим балансом:")
    users
        .filter(user => user.balance == minBalance)
        .forEach(user => console.log(user.company));
}


// варіант 1
function showMostFavoritedFruit1() {
    // масив фруктів
    let fruits = users.map(i => i.favoriteFruit).sort();

    // видалення дублікатів 
    let delDublicate = [];
    for (let fruit of fruits) {
        if (delDublicate.indexOf(fruit) == -1) {
            delDublicate.push(fruit);
        }
    }

    // підрахунок дублікатів
    let countDublicate = [];
    for (let fruit of delDublicate) {
        let count = fruits.filter(i => i == fruit).length;
        countDublicate.push(count);
    }

    // визначення максимальної кількості
    let maxFavorite = Math.max(...countDublicate);

    // знаходження індексів із відповідними фруктами
    let indexFruit = [];
    for (let i in countDublicate) {
        if (countDublicate[i] == maxFavorite) {
            indexFruit.push(Number(i));
        }
    }

    // виведення звіту про найулюбленіший фрукт
    let mes = "Наиболее любимые фрукты это:";
    for (let i of indexFruit) {
        mes += `\n${delDublicate[i]}`;
    }

    console.log(mes);
}

// варіант 2
function showMostFavoritedFruit2() {
    // створюємо об'єкт
    let fruitsObj = new Object();

    // щоб постыйно не перебирати виділимо масив лише фруктів
    let fruits = users.map(i => i.favoriteFruit);

    // перебираємо всі фрукти і додаємо в об'єкт
    fruits
        .forEach(i => {
            fruitsObj[i] = 0;
        });

    // підраховуємо фрукти
    fruits
        .forEach(i => {
            fruitsObj[i]++;
        });

    // визначаємо максимум
    let maxFruit = Number.MIN_VALUE;
    for (let i in fruitsObj) {
        maxFruit = Math.max(maxFruit, fruitsObj[i]);
    }

    // виводимо сповіщення
    let mes = "Наиболее любимые фрукты это:";
    for (let i in fruitsObj) {
        if (fruitsObj[i] == maxFruit) {
            mes += `\n${i}`;
        }
    }

    console.log(mes);
}
