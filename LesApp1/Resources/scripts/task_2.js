// створення об'єкта через конструктор
let firstPerson = new Object();
firstPerson.firstName = "Bohdan";
firstPerson.lastName = "Pinchuk";

// створення об'єкта через літерал
let secondPerson = {
    firstName: "Oleg",
    lastName: "Shvets",
};

// виведення інформації про об'єкт
Print(firstPerson);
Print(secondPerson);

// функція представлення персони
// person - персона
function Print(person) {
    let mes = `Object:\n`;

    for (let properties in person) {
        mes += `${properties}: ${person[properties]}\n`
    }

    console.log(mes);
}
