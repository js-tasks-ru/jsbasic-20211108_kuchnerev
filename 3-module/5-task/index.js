function getMinMax(str) {
   
        let ourArray = str.split(' ').filter(item => !isNaN(item));
        let sortArray = ourArray.sort((a, b) => a-b);
        let maxArray = Math.max.apply(null,sortArray);
        let minArray = Math.min.apply(null,sortArray);
        let maxMinArray = sortArray.filter(item => item == maxArray || item == minArray );


        let minValue = +maxMinArray[0];
        let maxValue = +maxMinArray[1];
        return{
            min:minValue,
            max:maxValue,
        }
}
