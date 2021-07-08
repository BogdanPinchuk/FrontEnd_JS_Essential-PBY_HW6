// old
/*
let products = [
    {
        name: "Бумага офисная А4, 80 г/м2, 500 л",
        price: 280.25,
        ordered: 0
    },
    {
        name: "Биндеры для бумаги 51 мм",
        price: 56,
        ordered: 0
    },
    {
        name: "Ручка шариковая синяя",
        price: 12.5,
        ordered: 0
    }
];
*/

// new
let products = [
    GetProduct("Бумага офисная А4, 80 г/м2, 500 л", 280.25, 0),
    GetProduct("Биндеры для бумаги 51 мм", 56, 0),
    GetProduct("Ручка шариковая синяя", 12.5, 0),
];

// цикл для получения количества покупаемых продуктов
for (let index = 0; index < products.length; index++) {
    const name = products[index].name;
    const price = products[index].price;

    products[index].ordered = +prompt(`Укажите количество продуктов '${name}', цена ${price}`, 0);
}

// цикл для расчета общей цены купленных продуктов
let totalPrice = 0;
for (let index = 0; index < products.length; index++) {
    totalPrice += products[index].price * products[index].ordered;
}

alert(`Сумма Вашего заказа ${totalPrice}.`);

let isFreeShipping = totalPrice > 1000;
if (isFreeShipping) // иногда в усолвии используется только одна переменная.
{
    alert("Доставка будет бесплатной.");
}

// фабричний метод
// name - назва товару
// price - ціна товару
// ordered - кількість одиниць, які хочуть замовити
function GetProduct(name, price, ordered) {
    return {
        name,
        price,
        ordered,
    };
}
