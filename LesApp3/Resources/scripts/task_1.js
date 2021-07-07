// old version
let obj1 = {
    firstName: "Ivan",
    lastName: "Ivanov",

    print: function (obj) {
        console.log("First Name: " + obj1.firstName);
        console.log("Last Name: " + obj1.lastName);
    }
};

obj1.print();

// new version
let obj2 = {
    firstName: "Ivan",
    lastName: "Ivanov",

    print: function () {
        console.log(`First Name: ${this.firstName}`);
        console.log(`Last Name: ${this.lastName}`);
    }
};

obj2.print();
