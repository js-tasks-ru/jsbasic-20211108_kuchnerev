function sumSalary(salaries) {
    let sum = 0;

    for(const key in salaries){
        const dataObject = salaries[key];

        if (Number.isFinite(dataObject)){
            sum += dataObject;
        }
    }
    return sum;
}
