function print(text) {
  console.log(text);
}

function isValid(name) {

    //return (name.includes(" ") || name.length < 4 || name === null)? false: true;
    return !!name && !name.includes(' ') && name.length >= 4;


function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}
