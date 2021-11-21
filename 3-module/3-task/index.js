function camelize(str) {
    return str.split('-')
        .map((element,position) => position == 0? element :element[0].toUpperCase()+element.slice(1))
        .join('');
}
