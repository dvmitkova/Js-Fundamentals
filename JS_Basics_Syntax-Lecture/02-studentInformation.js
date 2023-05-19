function studentInformation(name, age, avgGrade) {
    let buff = `Name: ${name}, Age: ${age}, Grade: ${avgGrade.toFixed(2)}`;

    console.log(buff);
}

studentInformation('John', 15, 5.54678)