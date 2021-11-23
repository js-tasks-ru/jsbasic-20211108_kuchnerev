function showSalary(users, age) {
    const ourArray = users.filter(item => item.age <= age);
    const names = ourArray.map(item => item.name + ', ' +item.balance);
    const ourString = names.join('\n');
    return ourString;
}
