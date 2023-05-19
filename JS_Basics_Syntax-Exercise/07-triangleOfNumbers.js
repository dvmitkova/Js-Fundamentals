function triangleOfNumbers(n) {
    for(i = 1; i <= n; i++) {
        let result = '';
        for(j = 1; j <= i; j++) {
            result += `${i} `
        }
        console.log(result);
        result = '';
    }   
}

triangleOfNumbers(3)