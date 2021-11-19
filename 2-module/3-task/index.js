let calculator = {
    oneNumber: '',
    secondNumber: '',
    read(oneNumber,secondNumber){
        this.oneNumber = oneNumber;
        this.secondNumber = secondNumber;
    },
    sum(){
        return this.oneNumber + this.secondNumber;
    },
    mul(){
        return this.oneNumber * this.secondNumber;
    }
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
