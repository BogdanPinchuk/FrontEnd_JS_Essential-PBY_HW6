// щоб функція не показувала контекст необхідно розкоментувати
// 'use strict'

// запуск функції
GetContext();

// функція яка виводить контекст
function GetContext() {
    console.log(this);
}
