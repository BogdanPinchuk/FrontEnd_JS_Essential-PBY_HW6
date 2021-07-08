// old
/*
let obj1 = {
    firstName: "Ivan",
    lastName: "Ivanov"
};

let obj2 = {
    firstName: "Jhon",
    lastName: "Doe"
};

function print(obj) {
    console.log("First Name: " + obj.firstName);
    console.log("Last Name: " + obj.lastName);
}

print(obj1);
print(obj2);
*/

// масив даних
let persons = [
    GetPerson("Ivan", "Ivanov"),
    GetPerson("Jhon", "Doe"),
]; 

// вивід даних
console.log("Варіант 1");
persons.forEach(i => i.Print());

console.log("Варіант 2");
for (const person of persons) {
    person.Print();
};

// фабричний метод
// firstName - Ім'я
// lastName - Прізчище
function GetPerson(firstName, lastName) {
    return {
        firstName,
        lastName,
        // вивід в консоль
        Print: function () {
            let mes = `First Name: ${firstName}\n` +
                `Last Name: ${lastName}`;
            console.log(mes);
        },
    };
}