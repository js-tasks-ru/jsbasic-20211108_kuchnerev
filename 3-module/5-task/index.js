function getMinMax(str) {
    let ourArray = str.split(' ').filter(item => !isNaN(item));
    let sortArray = ourArray.sort((a, b) => a-b);
    let minValue = +sortArray[0];
    let maxValue = +sortArray[sortArray.length-1];
    return{
        min:minValue,
        max:maxValue,
    }
}
