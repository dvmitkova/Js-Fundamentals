function sumOfOddNumbers(n) {
    let sum = 0;
    let counter = n;
    
    for(i = 1; i <= counter; i++) {
        n = counter;
        if(i % 2 === 1) {
            console.log(i);
            sum += i;
            counter++;
        }  
    }
    console.log(`Sum: ${sum}`);
} 

sumOfOddNumbers(5)