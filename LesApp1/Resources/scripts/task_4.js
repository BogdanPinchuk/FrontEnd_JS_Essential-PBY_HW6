// виведення властивостей на екран

// варіант 1
console.log("варіант 1");
console.log(`first: ${user.name.first}`);
console.log(`last : ${user.name.last}`);

// варіант 2
console.log("варіант 2");
console.log(`first: ${user["name"]["first"]}`);
console.log(`last : ${user['name']['last']}`);

// зміна балансу
user.balance = '$2,000.00'
// перевірка
console.log(`user.balance: ${user.balance}`);

// видалення почти
delete user.email;
// перевірка
console.log(`user.email: ${user.email}`);

// вивід всього
console.log(user);
