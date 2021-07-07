// Адреса электронной почты всех пользователей (email)
users.forEach(i => {
    console.log(`${i.name.first} ${i.name.last} email: ${i.email}`);
});

// Имя и фамилию пользователей с наибольшим количеством друзей
let maxValue = Math.max(...users.map(i => i.friends.length));
// help info
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max?retiredLocale=uk
users.forEach(i => {
    if (i.friends.length == maxValue) {
        console.log(`${i.name.first} ${i.name.last} has ${maxValue} friends.`);
    }
});

// Компанию пользователя с наибольшим балансом и компанию пользователя с наименьшим балансом
let minBalance = Math.min(...users.map(i => i.balance)),
    maxBalance = Math.max(...users.map(i => i.balance));

// фільсація і вивід інформації
console.log(`Companies with minimum balance:`);
let arrayMin = users.filter(i => i.balance == minBalance);
for (let user of arrayMin) {
    console.log(`company: ${user.company} has balance: ${user.balance}`);
}

console.log(`Companies with maximum balance:`);
let arrayMax = users.filter(i => i.balance == maxBalance);
for (let user of arrayMax) {
    console.log(`company: ${user.company} has balance: ${user.balance}`);
}
