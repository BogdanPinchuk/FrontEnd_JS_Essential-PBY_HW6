// створення об'єкта за допомогою літерала
let person = {
    firstName: "Богдан",
    age: 29,
    seyHello: function() {
        console.log(`Привет, меня зовут ${this.firstName}, мне ${this.age} лет.`);
    } 
};

// console.log(person.seyHello);
person.seyHello();
