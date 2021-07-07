// варіант 1
console.log("варіант 1");

// найдені персони із компанії Keebler LLC (використання розширених методів)
let foundUsers = users.filter(i => i.company.name == "Keebler LLC");

// вивід на екран
for (const user of foundUsers) {
    console.log(user.name + " from " + user.address.city);
}

// варіант 2 (схоже на linq методи)
console.log("варіант 2");

users.forEach(i => {
    if (i.company.name == "Keebler LLC") {
        console.log(i.name + " from " + i.address.city);
    };
});
