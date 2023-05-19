function printAndSum(firstNum, secNum) {
    let sum = 0;
    let buff = '';
    for(i = firstNum; i <= secNum; i++) {
        sum += i;
        buff += i + ' ';
    }
    console.log(buff);
    console.log(`Sum: ${sum}`);
}

printAndSum(5, 10)