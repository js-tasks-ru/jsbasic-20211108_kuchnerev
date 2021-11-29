function makeFriendsList(friends) {
    let ul = document.createElement('ul');
    document.body.append(ul);

    friends.forEach(function (item) {
        let newString = (item.firstName + ' ' + item.lastName);
        let li = document.createElement('li');
        ul.append(li);
        li.innerHTML = newString;
    });
    return ul;
}

