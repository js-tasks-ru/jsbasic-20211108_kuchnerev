function makeFriendsList(friends) {
    let ul = document.createElement('ul');
    document.body.append(ul);

    for(let key in friends) {
        let newString = (friends[key].firstName + ' ' + friends[key].lastName);
        let li = document.createElement('li');
        ul.append(li);
        li.innerHTML = newString;
    }
    return ul;
}

